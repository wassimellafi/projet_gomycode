const mongoose = require("mongoose");
const { Schema, model } = mongoose;
const questionSchema = new Schema({
    description: String,
    image: {
        type: String,
        required: false,
    },
    alternatives: [
        {
            text: {
                type: String,
                required: true,
            },
            isCorrect: {
                type: Boolean,
                required: true,
                default: false,
            },
            image: {
                type: String,
                required: false,
            },
        },
    ],
    author: {
        type: Schema.Types.ObjectId,
        ref: "User",
    },
});

module.exports = Question = model("question", questionSchema);
