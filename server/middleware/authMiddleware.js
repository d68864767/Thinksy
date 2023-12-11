// server/middleware/authMiddleware.js

const jwt = require('jsonwebtoken');
const config = require('../config');

// Middleware to authenticate requests
exports.authenticate = (req, res, next) => {
  try {
    // Get the token from the request headers
    const token = req.headers.authorization.split(' ')[1];

    // Verify the token
    const decodedToken = jwt.verify(token, config.jwtSecret);

    // Attach the user ID to the request object
    req.user = { userId: decodedToken.userId };

    next();
  } catch (error) {
    console.error(error);
    res.status(401).json({ message: 'Unauthorized' });
  }
};
