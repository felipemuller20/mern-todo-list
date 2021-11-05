import axios from 'axios';

const PORT = 3000;

const api = axios.create({
  baseURL: `http://localhost:${PORT}`,
});

export default async function getByDate() {
  const res = await api.get('/tasks');
  console.log(res.data);
}
