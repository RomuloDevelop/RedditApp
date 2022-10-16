import axios from 'axios';
import {BASE_URL} from 'config/constants';

const axiosInstance = axios.create({
  timeout: 15000,
  responseType: 'json',
  baseURL: BASE_URL,
});
export default axiosInstance;
