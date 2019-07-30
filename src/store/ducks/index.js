import { connectRouter } from 'connected-react-router';
import { reducer as toastr } from 'react-redux-toastr';

import { persistCombineReducers } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import auth from './auth';
import login from './login';
import cart from './cart';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth', 'cart'],
};

export default history => persistCombineReducers(persistConfig, {
  router: connectRouter(history),
  toastr,
  auth,
  login,
  cart,
});
