const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true
    },
    description: String,
    status: {
      type: String,
      enum: ["Todo", "In Progress", "Done"],
      default: "Todo"
    },
    dueDate: Date,

    // 🔴 soft delete flag
    isDeleted: {
      type: Boolean,
      default: false
    }
  },
  { timestamps: true } // createdAt & updatedAt
);

module.exports = mongoose.model("Task", taskSchema);






