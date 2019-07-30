import { actions as ToastrActions } from 'react-redux-toastr';
import { put } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import apisauce from 'apisauce';

import { AuthActions } from '~/store/ducks/auth';
import { toastrParams } from '~/helpers/toastr';

export default function* handleError(response, customMessages = {}) {
  const { status, problem, data } = response;

  const defaultMessages = {
    serverError: 'Ocorreu um erro no servidor.',
    clientError: 'Ocorreu um erro nesta requisição.',
    connectionError: 'Erro de conexão com a internet.',
    authError: 'O seu login expirou.',
    formError: 'As informações contidas no formulário são inválidas.',
  };

  const messages = Object.assign({}, defaultMessages, customMessages);

  if (problem !== apisauce.CLIENT_ERROR && problem !== apisauce.SERVER_ERROR) {
    yield put(ToastrActions.add(toastrParams(messages.connectionError, 'danger')));
    return;
  }

  if (status === 400) {
    yield put(ToastrActions.add(toastrParams(data.error, 'danger')));
    return;
  }

  if (status === 401) {
    yield put(ToastrActions.add(toastrParams(messages.authError, 'danger')));
    yield put(AuthActions.logout());
    yield put(push('/login'));
    return;
  }

  if (status === 422) {
    yield put(ToastrActions.add(toastrParams(messages.formError, 'danger')));
    return;
  }

  if (status >= 500) {
    yield put(ToastrActions.add(toastrParams(messages.serverError, 'danger')));
    return;
  }

  yield put(ToastrActions.add(toastrParams(messages.clientError, 'danger')));
}
