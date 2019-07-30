import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

function PrivateRoute({ component: Component, ...anotherProps }) {
  const { isLogged } = useSelector(state => state.auth);
  const route = props => (isLogged ? <Component {...props} /> : <Redirect to={{ pathname: '/login' }} />);

  return <Route {...anotherProps} render={p => route(p)} />;
}

PrivateRoute.propTypes = {
  component: PropTypes.func.isRequired,
};

export default PrivateRoute;
