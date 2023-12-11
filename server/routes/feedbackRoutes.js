// server/routes/feedbackRoutes.js

const express = require('express');
const router = express.Router();
const feedbackController = require('../controllers/feedbackController');

// Route for submitting feedback
router.post('/', feedbackController.submitFeedback);

// Route for retrieving feedback
router.get('/', feedbackController.getFeedback);

// Route for deleting feedback
router.delete('/:id', feedbackController.deleteFeedback);

module.exports = router;
