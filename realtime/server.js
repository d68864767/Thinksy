// realtime/server.js

const express = require('express');
const app = express();
const feedbackController = require('./controllers/feedbackController');
const authMiddleware = require('./middleware/authMiddleware');

// Middleware
app.use(express.json());

// Routes
app.post('/api/feedback', authMiddleware.authenticate, feedbackController.submitFeedback);

// Start server
const server = app.listen(4000, () => {
  console.log('Realtime server is running on port 4000');
});

// WebSocket setup
const WebSocket = require('ws');
const wss = new WebSocket.Server({ server });

// WebSocket connection handling
wss.on('connection', (ws) => {
  console.log('New WebSocket connection');

  // Handle incoming messages
  ws.on('message', (message) => {
    console.log('Received message:', message);

    // Broadcast the message to all connected clients
    wss.clients.forEach((client) => {
      if (client !== ws && client.readyState === WebSocket.OPEN) {
        client.send(message);
      }
    });
  });

  // Handle WebSocket connection close
  ws.on('close', () => {
    console.log('WebSocket connection closed');
  });
});

module.exports = server;
