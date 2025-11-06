const express = require('express');
const {
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
  getUserStats,
} = require('../controllers/userController');
const { authenticateToken, requireAdmin } = require('../middleware/auth');

const router = express.Router();

// Apply authentication and admin middleware to all routes
router.use(authenticateToken);
router.use(requireAdmin);

// @route   GET /api/users/stats
// @desc    Get user statistics
// @access  Admin only
router.get('/stats', getUserStats);

// @route   GET /api/users
// @desc    Get all users with pagination and filtering
// @access  Admin only
router.get('/', getAllUsers);

// @route   GET /api/users/:id
// @desc    Get user by ID
// @access  Admin only
router.get('/:id', getUserById);

// @route   PUT /api/users/:id
// @desc    Update user by ID
// @access  Admin only
router.put('/:id', updateUser);

// @route   DELETE /api/users/:id
// @desc    Delete user by ID
// @access  Admin only
router.delete('/:id', deleteUser);

module.exports = router;
