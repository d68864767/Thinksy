// server/config.js

require('dotenv').config();

module.exports = {
  port: process.env.PORT || 3000,
  database: {
    url: process.env.DB_URL || 'mongodb://localhost:27017/thinksy',
  },
  jwtSecret: process.env.JWT_SECRET || 'your-secret-key',
  corsOptions: {
    origin: process.env.CORS_ORIGIN || 'http://localhost:3000',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  },
};
