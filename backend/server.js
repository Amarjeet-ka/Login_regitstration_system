const express = require('express');
const app = express();
const apiRouter = require('./routes/discussion_form.js');
const connectdatabase = require('./config/database.js');
const { default: mongoose } = require('mongoose');

 connectdatabase;


 // Parse JSON request bodies
app.use(express.json());

// Create a schema for the question
const questionSchema = new mongoose.Schema({
  question: String,
});

// Create a model based on the schema
const Question = mongoose.model("Question", questionSchema);

// Parse JSON request bodies
app.use(express.json());

// Endpoint to handle the submitQuestion POST request
app.post("/api/submitQuestion", (req, res) => {
  const { question } = req.body;

  // Create a new question document
  const newQuestion = new Question({ question });

  // Save the question to the database
  newQuestion.save()
    .then(() => {
      // Send a response back to the client
      res.json({ message: "Question submitted successfully" });
    })
    .catch((error) => {
      console.error("Failed to save question:", error);
      res.status(500).json({ error: "Failed to save question" });
    });
});

const port = process.env.PORT || 5000;

app.listen(port, function() {
  console.log('\x1b[35m%s\x1b[0m', `Server running on port ${port}`);
});
