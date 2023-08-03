import express from "express";
import cors from "cors";

const app = express();
const port = 3000; // Change this port if needed

// Start the server
app.listen(port);

// Middleware to parse request bodies as JSON
app.use(express.json());
app.use(cors());

// Sample data (Replace this with your data source or database)
let items = [
  { id: 1, nameTask: "Item 1" },
  { id: 2, nameTask: "Item 2" },
  { id: 3, nameTask: "Item 3" },
];

// Routes
app.get("/api/tasks", (req, res) => {
  res.json(items);
});

app.post("/api/tasks", (req, res) => {
  const newTask = {
    id: Math.floor(Math.random() * 100),
    nameTask: req.body.nameTask,
  };
  items.push(newTask);
  res.status(201).json(items);
});

app.delete("/api/tasks/:id", (req, res) => {
  const paramId = parseInt(req.params.id);
  const filteredTasks = items.filter((task) => task.id !== paramId);
  items = filteredTasks;
  res.status(204).send(items);
});
