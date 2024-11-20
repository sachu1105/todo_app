import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:3000/api/tasks', // Replace with your backend URL
});

export default axiosInstance;
