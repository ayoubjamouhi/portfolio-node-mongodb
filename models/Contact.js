const mongoose = require('mongoose');

const ContactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: 'Require Name !',
    trim: true,
  },
  email: {
    type: String,
    required: 'Require Email !',
    trim: true,
  },
  message: {
    type: String,
    required: 'Require Message !',
    trim: true,
  },
});

module.exports = mongoose.model('Contact', ContactSchema);
