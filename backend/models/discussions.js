// Define a Mongoose schema for the question


  const mongoose = require("mongoose");

  const questionSchema = new mongoose.Schema({
    question: String,
  });
const discussion_form = mongoose.model("Gridimage", questionSchema);

module.exports = discussion_form;
