import axios from 'axios';

const PORT = 3000;

const api = axios.create({
  baseURL: `http://localhost:${PORT}`,
});

export default async function fetchTasks(order) {
  let res;
  switch (order) {
    case 'name':
      res = await api.get('/tasks/alpha');
      break;
    case 'status':
      res = await api.get('/tasks/status');
      break;
    default:
      res = await api.get('/tasks');
  }
  return res.data;
}
