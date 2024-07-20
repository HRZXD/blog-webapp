const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
    topic: String,
    story: String,
    date: String,
    detail: String,
    img: {
        data: Buffer,
        contentType: String
    }
});

module.exports = mongoose.model('blogs', blogSchema);
