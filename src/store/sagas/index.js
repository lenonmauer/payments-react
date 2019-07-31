import { all, takeLatest } from 'redux-saga/effects';

import { LoginTypes } from '~/store/ducks/login';
import { SignupTypes } from '~/store/ducks/signup';

import { login } from './login';
import { signup } from './signup';

export default function* rootSaga() {
  return yield all([
    takeLatest(LoginTypes.POST_LOGIN_REQUEST, login),
    takeLatest(SignupTypes.POST_SIGNUP_REQUEST, signup),
  ]);
}
