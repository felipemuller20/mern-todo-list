const rescue = require('express-rescue');

const TasksServices = require('../services/tasks');

const getAll = rescue(async (_req, res) => {
  const tasks = await TasksServices.getAll();
  res.status(200).json(tasks);
});

const getAllAlphabetic = rescue(async (_req, res) => {
  const tasks = await TasksServices.getAllAlphabetic();
  res.status(200).json(tasks);
});

const getAllStatus = rescue(async (_req, res) => {
  const tasks = await TasksServices.getAllStatus();
  res.status(200).json(tasks);
});