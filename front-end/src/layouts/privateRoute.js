import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import AuthenticatedLayout from './authentication';

import { getSession } from '../utils/session';

const isAuthenticated = () => {
  const session = getSession();
  return !!session.accessToken;
};

const PrivateRoute = ({ component: Component, layout: Layout, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        isAuthenticated() ? (
          <AuthenticatedLayout>
            <Component {...props} />
          </AuthenticatedLayout>
        ) : (
          <Redirect
            to={{
              pathname: '/login',
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
