const User = require('../models/User');

// @desc    Get all users with pagination and filtering
// @route   GET /api/users
// @access  Admin only
const getAllUsers = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;

    // Build filter object
    const filter = {};
    if (req.query.role) filter.role = req.query.role;
    if (req.query.search) {
      filter.$or = [
        { name: { $regex: req.query.search, $options: 'i' } },
        { email: { $regex: req.query.search, $options: 'i' } },
      ];
    }

    // Get users with pagination
    const users = await User.find(filter)
      .select('-password')
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit);

    // Get total count for pagination
    const totalUsers = await User.countDocuments(filter);
    const totalPages = Math.ceil(totalUsers / limit);

    res.json({
      success: true,
      data: {
        users,
        pagination: {
          currentPage: page,
          totalPages,
          totalUsers,
          hasNextPage: page < totalPages,
          hasPrevPage: page > 1,
        },
      },
    });
  } catch (error) {
    console.error('Get users error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error while fetching users',
    });
  }
};

// @desc    Get user by ID
// @route   GET /api/users/:id
// @access  Admin only
const getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id).select('-password');

    if (!user) {
      return res.status(404).json({
        success: false,
        message: 'User not found',
      });
    }

    res.json({
      success: true,
      data: {
        user,
      },
    });
  } catch (error) {
    console.error('Get user error:', error);
    if (error.name === 'CastError') {
      return res.status(400).json({
        success: false,
        message: 'Invalid user ID',
      });
    }
    res.status(500).json({
      success: false,
      message: 'Server error while fetching user',
    });
  }
};

// @desc    Update user by ID
// @route   PUT /api/users/:id
// @access  Admin only
const updateUser = async (req, res) => {
  try {
    const { name, email, role } = req.body;

    // Check if email is already taken by another user
    if (email) {
      const existingUser = await User.findOne({
        email,
        _id: { $ne: req.params.id },
      });
      if (existingUser) {
        return res.status(400).json({
          success: false,
          message: 'Email is already taken by another user',
        });
      }
    }

    const user = await User.findByIdAndUpdate(
      req.params.id,
      {
        ...(name && { name }),
        ...(email && { email }),
        ...(role && { role }),
      },
      { new: true, runValidators: true }
    ).select('-password');

    if (!user) {
      return res.status(404).json({
        success: false,
        message: 'User not found',
      });
    }

    res.json({
      success: true,
      message: 'User updated successfully',
      data: {
        user,
      },
    });
  } catch (error) {
    console.error('Update user error:', error);
    if (error.name === 'CastError') {
      return res.status(400).json({
        success: false,
        message: 'Invalid user ID',
      });
    }
    res.status(500).json({
      success: false,
      message: 'Server error during user update',
    });
  }
};

// @desc    Delete user by ID
// @route   DELETE /api/users/:id
// @access  Admin only
const deleteUser = async (req, res) => {
  try {
    // Prevent admin from deleting themselves
    if (req.params.id === req.user._id.toString()) {
      return res.status(400).json({
        success: false,
        message: 'You cannot delete your own account',
      });
    }

    const user = await User.findByIdAndDelete(req.params.id);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: 'User not found',
      });
    }

    res.json({
      success: true,
      message: 'User deleted successfully',
    });
  } catch (error) {
    console.error('Delete user error:', error);
    if (error.name === 'CastError') {
      return res.status(400).json({
        success: false,
        message: 'Invalid user ID',
      });
    }
    res.status(500).json({
      success: false,
      message: 'Server error during user deletion',
    });
  }
};

// @desc    Get dashboard statistics
// @route   GET /api/users/stats
// @access  Admin only
const getUserStats = async (req, res) => {
  try {
    const totalUsers = await User.countDocuments();
    const adminUsers = await User.countDocuments({ role: 'admin' });
    const regularUsers = await User.countDocuments({ role: 'user' });

    // Recent registrations (last 30 days)
    const thirtyDaysAgo = new Date();
    thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
    const recentRegistrations = await User.countDocuments({
      createdAt: { $gte: thirtyDaysAgo },
    });

    res.json({
      success: true,
      data: {
        totalUsers,
        adminUsers,
        regularUsers,
        recentRegistrations,
      },
    });
  } catch (error) {
    console.error('Get stats error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error while fetching statistics',
    });
  }
};

module.exports = {
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
  getUserStats,
};
