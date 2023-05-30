const express = require("express");
const app = express();
const cors = require("cors");
const apiRouter = require("./routes/discussion_form.js");
const connectdatabase = require("./config/database.js");
const { default: mongoose } = require("mongoose");
const { Server, Socket } = require("socket.io");
const io = new Server();

const emailToSocketMapping = new Map();

io.on("connection", (socket) => {
  socket.on("join-room", (data) => {
    const { roomId, emailId } = data;
    console.log("User", emailId, "joined room", roomId);
    emailToSocketMapping.set(emailId, socket.id);
    socket.join(roomId);
    socket.broadcast.to(roomId).emit("user-joined", { emailId });
  });
});

connectdatabase;

app.use(cors());
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
  newQuestion
    .save()
    .then(() => {
      // Send a response back to the client
      res.json({ message: "Question submitted successfully" });
    })
    .catch((error) => {
      console.error("Failed to save question:", error);
      res.status(500).json({ error: "Failed to save question" });
    });
});

app.get("/api/getDiscussion", (req, res) => {
  // Fetch all question documents from the database
  Question.find()
    .then((questions) => {
      // Send the questions back to the client
      res.json(questions);
    })
    .catch((error) => {
      console.error("Failed to fetch discussion:", error);
      res.status(500).json({ error: "Failed to fetch discussion" });
    });
});

////////////////////////////////////
app.use(cors());
app.use(express.json());

let discussionData = [];

// API endpoint to submit a question
app.post("/api/submitQuestion", (req, res) => {
  const { question, answers } = req.body;
  const newQuestion = {
    id: discussionData.length + 1,
    question: question,
    answers: answers,
  };
  discussionData.push(newQuestion);
  res.json(newQuestion);
});

// API endpoint to submit an answer
app.post("/api/submitAnswer", (req, res) => {
  const { questionId, answer } = req.body;
  const question = discussionData.find((item) => item.id === questionId);
  if (question) {
    question.answers.push(answer);
    res.json(question);
  } else {
    res.status(404).json({ error: "Question not found" });
  }
});

// API endpoint to get the discussion data
app.get("/api/getDiscussion", (req, res) => {
  res.json(discussionData);
});

const port = process.env.PORT || 5000;

app.listen(port, function () {
  console.log("\x1b[35m%s\x1b[0m", `Server running on port ${port}`);
});
