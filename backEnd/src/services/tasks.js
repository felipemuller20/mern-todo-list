const TasksModels = require('../models/tasks');
const middlewares = require('./middlewares');

const getAll = async () => {
  const tasks = await TasksModels.getAll();
  return tasks;
};

const getAllAlphabetic = async () => {
  const tasks = await TasksModels.getAllAlphabetic();
  return tasks;
};

const getAllStatus = async () => {
  const tasks = await TasksModels.getAllStatus();
  return tasks;
}

const create = async (newTask) => {
  const { task, status } = newTask;

  const isValid = middlewares.validateCreateEntries(task, status);
  if (isValid) return isValid;

  const createdTask = await TasksModels.create(newTask);
  return createdTask.ops[0];
}