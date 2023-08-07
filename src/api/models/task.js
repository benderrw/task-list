import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
  },
  taskName: {
    type: String,
    required: true,
  },
});

export const Task = mongoose.model("task", taskSchema);
