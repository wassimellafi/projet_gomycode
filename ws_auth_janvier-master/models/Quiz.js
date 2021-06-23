const mongoose = require("mongoose");
const { Schema, model } = mongoose;
const quizSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    author: {
        type: Schema.Types.ObjectId,
        ref: "User",
    },
});

module.exports = Quiz = model("quiz", quizSchema);
