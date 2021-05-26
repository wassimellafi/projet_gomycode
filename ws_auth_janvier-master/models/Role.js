const mongoose = require("mongoose");
const { Schema, model } = mongoose;
const roleSchema = new Schema({
    name: { type: String, required: true },
});

module.exports = Role = model("role", roleSchema);
