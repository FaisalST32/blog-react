import axios from 'axios';

export const axiosWrapper = axios.create({
  baseURL: process.env.REACT_APP_API_URL
});