import axios from 'axios';
import { apiUrl } from '../environments/environment';

export const axiosWrapper = axios.create({
  baseURL: apiUrl
});