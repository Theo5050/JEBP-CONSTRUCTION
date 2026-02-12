const mongoose = require('mongoose');

const TeamSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    position: {
        type: String,
        required: true
    },
    bio: String,
    image: String,
    social: {
        linkedin: String,
        twitter: String,
        email: String
    },
    joinedYear: {
        type: Number,
        default: 2020
    },
    founder: {
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model('Team', TeamSchema);