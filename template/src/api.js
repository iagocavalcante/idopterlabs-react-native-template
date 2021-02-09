import { Platform } from 'react-native';
import axios from 'axios';
import envs from 'utils/envs';

let URL = envs.get('BASE_URL');

if (URL.match(/localhost/) && Platform.OS === 'android') {
  URL = URL.replace(/localhost/, '10.0.2.2');
}

export const api = axios.create({
  baseURL: URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const setAuthorizationHeader = (token) => {
  api.defaults.headers.Authorization = `Bearer ${token}`;
};
export const setInterceptor = (signOutCallback) => {
  api.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      if (error.response.status === 401) {
        return Promise.reject({
          ...error,
          callback: signOutCallback,
        });
      } else {
        return Promise.reject(error);
      }
    },
  );
};
