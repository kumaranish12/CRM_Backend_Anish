const mongoose = require('mongoose');

const audienceSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Audience', audienceSchema);
