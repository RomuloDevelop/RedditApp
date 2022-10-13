import axios from 'axios';

const axiosInstance = axios.create({
  timeout: 35000,
  responseType: 'json',
  baseURL: 'https://api.reddit.com/r/pics',
});

export default axiosInstance;
