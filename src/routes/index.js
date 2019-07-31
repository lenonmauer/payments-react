import React from 'react';

import { Switch, Route } from 'react-router-dom';

import PrivateRoute from '~/components/PrivateRoute';
import NotFound from '~/pages/NotFound';

import Dashboard from '~/pages/Dashboard';
import Payment from '~/pages/Payment';
import Cart from '~/pages/Cart';
import Login from '~/pages/Login';
import SignUp from '~/pages/SignUp';
import Logout from '~/pages/Logout';

function Routes() {
  return (
    <Switch>
      <PrivateRoute exact path="/" component={Dashboard} />
      <PrivateRoute exact path="/dashboard" component={Dashboard} />
      <Route exact path="/cart" component={Cart} />
      <Route exact path="/payment" component={Payment} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/signup" component={SignUp} />
      <Route exact path="/logout" component={Logout} />
      <Route exact path="*" component={NotFound} />
    </Switch>
  );
}

export default Routes;
