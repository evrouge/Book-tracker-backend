const mongoose = require('mongoose');

const bookTrackerSchema = new mongoose.Schema(
{
    title: String,
    author: String,
    genre: String,
    image: String,
    read: Boolean
});

const Books = mongoose.model('Book', bookTrackerSchema);

module.exports = Books;