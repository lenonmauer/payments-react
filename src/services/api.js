import axios from 'apisauce';

import { store } from '~/store';
import mock from './mock';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

mock(api);

api.addRequestTransform((request) => {
  const { auth } = store.getState();
  const { token } = auth.data;

  if (token) {
    request.headers.Authorization = `Bearer ${token}`;
  }
});

export default api;
