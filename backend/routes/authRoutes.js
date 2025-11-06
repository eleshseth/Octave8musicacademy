const express = require('express');
const {
  signup,
  login,
  getMe,
  updateProfile,
  changePassword,
  logout,
} = require('../controllers/authController');
const { authenticateToken } = require('../middleware/auth');
const {
  validateSignup,
  validateLogin,
  validatePasswordChange,
  handleValidationErrors,
} = require('../middleware/validation');

const router = express.Router();

// @route   POST /api/auth/signup
// @desc    Register a new user
// @access  Public
router.post('/signup', validateSignup, handleValidationErrors, signup);

// @route   POST /api/auth/login
// @desc    Login user
// @access  Public
router.post('/login', validateLogin, handleValidationErrors, login);

// @route   GET /api/auth/me
// @desc    Get current user profile
// @access  Private
router.get('/me', authenticateToken, getMe);

// @route   PUT /api/auth/profile
// @desc    Update user profile
// @access  Private
router.put('/profile', authenticateToken, updateProfile);

// @route   POST /api/auth/change-password
// @desc    Change user password
// @access  Private
router.post(
  '/change-password',
  authenticateToken,
  validatePasswordChange,
  handleValidationErrors,
  changePassword
);

// @route   POST /api/auth/logout
// @desc    Logout user
// @access  Private
router.post('/logout', authenticateToken, logout);

module.exports = router;
