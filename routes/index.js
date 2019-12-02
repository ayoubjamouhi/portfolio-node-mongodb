const express = require('express');

const router = express.Router();
const ContactController = require('../controllers/ContactController');

router.get('/', ContactController.getIndex);

router.get('/contact', ContactController.getContactPage);
router.post('/contact', ContactController.createContact);

module.exports = router;
