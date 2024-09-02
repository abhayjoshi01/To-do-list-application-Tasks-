const express = require('express');
const Task = require('../models/Task');

const router = express.Router();


router.post('/', async (req, res) => {
  const { title, description } = req.body;
  const newTask = new Task({ title, description });
  await newTask.save();
  res.json(newTask);
});


router.get('/', async (req, res) => {
  const tasks = await Task.find();
  res.json(tasks);
});


router.get('/:id', async (req, res) => {
  const task = await Task.findById(req.params.id);
  if (!task) {
    return res.status(404).json({ message: 'Task not found' });
  }
  res.json(task);
});


router.put('/:id', async (req, res) => {
  const { title, description, completed } = req.body;
  const task = await Task.findByIdAndUpdate(req.params.id, { title, description, completed }, { new: true });
  if (!task) {
    return res.status(404).json({ message: 'Task not found' });
  }
  res.json(task);
});


router.delete('/:id', async (req, res) => {
  const task = await Task.findByIdAndDelete(req.params.id);
  if (!task) {
    return res.status(404).json({ message: 'Task not found' });
  }
  res.json({ message: 'Task deleted' });
});

module.exports = router;