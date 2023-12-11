const express = require('express');
const app = express();
const feedbackController = require('./controllers/feedbackController');
const authController = require('./controllers/authController');
const authMiddleware = require('./middleware/authMiddleware');

// Middleware
app.use(express.json());

// Routes
app.post('/api/feedback', authMiddleware.authenticateUser, feedbackController.submitFeedback);
app.post('/api/login', authController.login);

// Start server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
