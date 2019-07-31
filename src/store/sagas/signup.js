import { put, call } from 'redux-saga/effects';
import { push } from 'connected-react-router';

import { actions as ToastrActions } from 'react-redux-toastr';
import { SignupActions } from '~/store/ducks/signup';

import api from '~/services/api';
import { toastrParams } from '~/helpers/toastr';

import handleError from './error-handler';

export function* signup(action) {
  const { data } = action.payload;

  const response = yield call(api.post, '/users', data);

  if (response.ok) {
    yield put(SignupActions.postSignupSuccess());
    yield put(ToastrActions.add(toastrParams('Cadastro realizado com sucesso.')));
    yield put(push('/login'));
  }
  else {
    yield handleError(response);
    yield put(SignupActions.postSignupFailure());
  }
}
