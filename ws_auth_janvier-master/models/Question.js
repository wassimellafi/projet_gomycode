const mongoose = require("mongoose");
const { Schema, model } = mongoose;
const questionSchema = new Schema({
    question: String,
    type: String,
    difficulty: String,
    correct_answer: String,
    incorrect_answers: [String],
    author: {
        type: Schema.Types.ObjectId,
        ref: "User",
    },
    category: {
        type: Schema.Types.ObjectId,
        ref: "Quiz",
    },
});

module.exports = Question = model("question", questionSchema);
