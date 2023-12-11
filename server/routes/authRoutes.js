// server/routes/authRoutes.js

const express = require('express');
const authController = require('../controllers/authController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

// Register a new user
router.post('/register', authController.register);

// Login user
router.post('/login', authController.login);

// Get authenticated user
router.get('/user', authMiddleware.authenticate, authController.getAuthenticatedUser);

module.exports = router;
