const mongoose = require('mongoose');

const ContactSchema = new mongoose.Schema({
    name: String,
    email: String,
    phone: String,
    message: String,
    service: String,
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Contact', ContactSchema);