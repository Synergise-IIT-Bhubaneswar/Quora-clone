const mongoose = require('mongoose');

const questionSchema = mongoose.Schema({
    heading: String,
    description: String,
    createdAt: {
        type: Date,
        default: new Date()
    },
    tags: [String],
    userId: [String],
    answersId =[String]
});

const questions = mongoose.model("Question", questionSchema);

module.exports = questions;