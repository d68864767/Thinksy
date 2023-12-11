```javascript
const mongoose = require('mongoose');

const feedbackSchema = new mongoose.Schema({
  reviewer: {
    type: String,
    required: true,
  },
  target: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Feedback = mongoose.model('Feedback', feedbackSchema);

module.exports = Feedback;
```
