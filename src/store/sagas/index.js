import { all, takeLatest } from 'redux-saga/effects';

import { LoginTypes } from '~/store/ducks/login';

import { login } from './login';

export default function* rootSaga() {
  return yield all([takeLatest(LoginTypes.POST_LOGIN_REQUEST, login)]);
}
