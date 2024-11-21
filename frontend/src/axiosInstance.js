import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:3000/api/tasks', //backend api
});

export default axiosInstance;
