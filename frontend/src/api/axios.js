import axios from 'axios';
import { getToken } from '../utils/functions';

const instance = axios.create({});

// Add request interceptor
instance.interceptors.request.use(
  function (config) {
    const token = getToken()
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

// Add response interceptor
instance.interceptors.response.use(
  (response) =>
    new Promise((resolve, reject) => {
      resolve(response);
    }),
  (error) => {
    if (!error?.response) {
      return new Promise((resolve, reject) => {
        reject(error);
      });
    }

    if (error?.response?.status === 401) {
    //   refreshTokenApi();
    //   AllToast.info("Please try again")
    } else {
      return new Promise((resolve, reject) => {
        reject(error);
      });
    }
  }
);

export default instance;
