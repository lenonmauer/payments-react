import React from 'react';
import { useDispatch } from 'react-redux';
import { push } from 'connected-react-router';

import { AuthActions } from '~/store/ducks/auth';

function Logout() {
  const dispatch = useDispatch();

  dispatch(AuthActions.logoutUser());
  dispatch(push('/dashboard'));

  return <div />;
}

export default Logout;
