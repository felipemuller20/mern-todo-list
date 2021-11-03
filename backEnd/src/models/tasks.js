const { ObjectId } = require('mongodb');
const connection = require('./connection');

const getAll = async () => {
  const db = await connection();
  const tasks = await db.collection('tasks').find().sort({ date: -1 }).toArray();
  return tasks;
};

const getAllAlphabetic = async () => {
  const db = await connection();
  const tasks = await db.collection('tasks')
    .find()
    .sort({ task: 1 })
    .toArray();
  return tasks;
};

const getAllStatus = async () => {
  const db = await connection();
  const tasks = await db.collection('tasks')
    .find()
    .sort({ status: 1 })
    .toArray();
  return tasks;
};

const getById = async (id) => {
  const db = await connection();
  const task = await db.collection('tasks')
    .findOne(new ObjectId(id));
  return task;
}

const create = async (toDo) => {
  const { date, status, task } = toDo;
  const db = await connection();
  const task = await db.collection('tasks')
    .insertOne({ date, status, task });
  return task;
}

const exclude = async (id) => {
  const db = await connection();
  const task = await getById(id);
  await db.collection('tasks').deleteOne({ _id: ObjectId(id) });
  return task;
}

const update = async (id, task, status) => {
  const db = await connection();
  await db.collection('tasks')
    .updateOne({ _id: ObjectId(id) }, { $set: { task, status }});

  const task = await getById(id);
  return task;
}

module.exports = {
  getAll,
  getAllAlphabetic,
  getAllStatus,
  getById,
  exclude,
  create,
  update,
}