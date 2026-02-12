const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');

// Submit contact form
router.post('/', async (req, res) => {
    try {
        const contact = new Contact(req.body);
        await contact.save();
        res.status(201).json({ message: 'Message sent successfully!' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Get all messages (admin only - simplified)
router.get('/', async (req, res) => {
    try {
        const messages = await Contact.find().sort({ date: -1 });
        res.json(messages);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;