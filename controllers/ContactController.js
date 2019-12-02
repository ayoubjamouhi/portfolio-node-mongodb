const Contact = require('../models/Contact');

exports.createContact = async (req, res) => {
  const create = await new Contact(req.body).save();
  res.render('index');
};

exports.getContactPage = async (req, res) => {
  res.render('contact', { text: 'hello' });
};

exports.getIndex = async (req, res) => {
  res.render('index');
};
