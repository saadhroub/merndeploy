const mongoose = require('mongoose');

const AuthorSchema = new mongoose.Schema({
    name: {
        type: String,
        minLength: [3, 'Name muse be of 3 characters or more.']
    }
}, {timestamps: true})

const Author = mongoose.model('Author', AuthorSchema);

module.exports = Author;