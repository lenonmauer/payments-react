import { put, call } from 'redux-saga/effects';
import { push } from 'connected-react-router';

import { LoginActions } from '~/store/ducks/login';
import { AuthActions } from '~/store/ducks/auth';

import api from '~/services/api';

import handleError from './error-handler';

export function* login(action) {
  const { data } = action.payload;

  const response = yield call(api.post, '/login', data);

  if (response.ok) {
    yield put(LoginActions.postLoginSuccess());
    yield put(AuthActions.setUser(response.data));
    yield put(push('/dashboard'));
  }
  else {
    yield handleError(response);
    yield put(LoginActions.postLoginFailure());
  }
}
