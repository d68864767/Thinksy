// database/seeders/seedData.js

const mongoose = require('mongoose');
const Feedback = require('../server/models/Feedback');
const User = require('../server/models/User');

mongoose.connect('mongodb://localhost/thinksy', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const seedData = async () => {
  try {
    // Create users
    const user1 = new User({
      username: 'manager1',
      password: 'password1',
    });
    await user1.save();

    const user2 = new User({
      username: 'employee1',
      password: 'password2',
    });
    await user2.save();

    // Create feedback
    const feedback1 = new Feedback({
      reviewer: 'manager1',
      target: 'employee1',
      content: 'Great teamwork on the recent project!',
    });
    await feedback1.save();

    console.log('Seed data created successfully.');
  } catch (error) {
    console.error('Error seeding data:', error);
  } finally {
    mongoose.disconnect();
  }
};

seedData();
