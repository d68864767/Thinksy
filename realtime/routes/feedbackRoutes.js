const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');
const feedbackController = require('../controllers/feedbackController');

// Route to submit feedback
router.post('/submit', authMiddleware.authenticateUser, feedbackController.submitFeedback);

// Route to get feedback by reviewer
router.get('/reviewer/:reviewerId', authMiddleware.authenticateUser, feedbackController.getFeedbackByReviewer);

// Route to get feedback by target
router.get('/target/:targetId', authMiddleware.authenticateUser, feedbackController.getFeedbackByTarget);

// Route to get feedback by reviewer and target
router.get('/reviewer/:reviewerId/target/:targetId', authMiddleware.authenticateUser, feedbackController.getFeedbackByReviewerAndTarget);

module.exports = router;
