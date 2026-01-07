const express = require("express");
const Task = require("../models/Task");
const taskValidationSchema = require("../validations/taskValidation");

const router = express.Router();

/* CREATE TASK */
router.post("/tasks", async (req, res) => {
  const { error } = taskValidationSchema.validate(req.body);
  if (error) return res.status(400).json(error.details[0].message);

  const task = await Task.create(req.body); 
  res.status(201).json(task);
});

/* ✅ STEP 3: GET ALL TASKS (hide soft deleted) */
router.get("/tasks", async (req, res) => {
  try {
    const { status } = req.query;

    // base filter
    let filter = {
      isDeleted: false // ❗ soft deleted hide
    };

    // agar status bheja ho
    if (status) {
      filter.status = status;
    }

    const tasks = await Task.find(filter);
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


/* ✅ STEP 4: GET TASK BY ID (ignore deleted) */
router.get("/tasks/:id", async (req, res) => {
  const task = await Task.findOne({
    _id: req.params.id,
    isDeleted: false
  });

  if (!task) return res.status(404).json("Task not found");

  res.json(task);
});

/* UPDATE TASK */
router.put("/tasks/:id", async (req, res) => {
  const { error } = taskValidationSchema.validate(req.body);
  if (error) return res.status(400).json(error.details[0].message);

  const updatedTask = await Task.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );

  res.json(updatedTask);
});

/* ✅ SOFT DELETE */
router.delete("/tasks/:id", async (req, res) => {
  await Task.findByIdAndUpdate(req.params.id, {
    isDeleted: true
  });

  res.json({ message: "Task soft deleted" });
});


module.exports = router;
