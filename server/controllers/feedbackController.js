// server/controllers/feedbackController.js

const Feedback = require('../models/Feedback');

// Controller for submitting feedback
exports.submitFeedback = async (req, res) => {
  try {
    const { reviewer, target, content } = req.body;

    // Create a new feedback instance
    const feedback = new Feedback({
      reviewer,
      target,
      content,
    });

    // Save the feedback to the database
    await feedback.save();

    res.status(201).json({ message: 'Feedback submitted successfully.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'An error occurred while submitting feedback.' });
  }
};

// Controller for retrieving feedback
exports.getFeedback = async (req, res) => {
  try {
    const feedback = await Feedback.find();

    res.status(200).json(feedback);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'An error occurred while retrieving feedback.' });
  }
};

// Controller for deleting feedback
exports.deleteFeedback = async (req, res) => {
  try {
    const { id } = req.params;

    // Find the feedback by ID and delete it
    await Feedback.findByIdAndDelete(id);

    res.status(200).json({ message: 'Feedback deleted successfully.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'An error occurred while deleting feedback.' });
  }
};
