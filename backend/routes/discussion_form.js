const express = require('express');
const bodyParser=require('body-parser');
const router = express.Router();
const Question = require('../models/discussions.js')


router.use(bodyParser.json());




// API endpoint to handle form submission
router.post("/api/submitQuestion", (req, res) => {
  // Create a new question instance using the submitted data
  const newQuestion = new Question({
    question: req.body.question,
  });

  // Save the question to the database
  newQuestion.save((err) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: "Failed to submit question" });
    } else {
      res.json({ message: "Question submitted successfully!" });
    }
  });
});

module.exports=router;