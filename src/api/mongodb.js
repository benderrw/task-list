import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import { Task } from "./models/task.js";

const port = 8000;
const mongoUri =
  "mongodb+srv://benderrw:AZzr8ER4VJ5KH78@cluster0.1iuslha.mongodb.net/?retryWrites=true&w=majority";

// Create an Express app
const app = express();

// Connect to MongoDB
mongoose
  .connect(mongoUri)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Error connecting to MongoDB:", err));

// Enable CORS middleware
app.use(cors());

// Middleware to parse request bodies as JSON
app.use(express.json());

// Define your REST API routes and logic here
const router = express.Router();

router.get("api/tasks", async (req, res) => {
  try {
    const tasks = Task.find();
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.post("api/tasks", async (req, res) => {
  const newTask = new Task({
    id: Math.floor(Math.random() * 100),
    nameTask: req.body.nameTask,
  });

  try {
    const savedTask = await newTask.save();
    res.status(201).json(savedTask);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
