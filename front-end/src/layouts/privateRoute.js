import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

import AuthenticatedLayout from './authentication';

import { getSession } from '../utils/session';

const isAuthenticated = () => {
  const session = getSession();
  return !!session.accessToken;
};

class PrivateRoute extends Component {
  render() {
    const UserComponent = this.props.component;

    return (
      <Route
        {...this.props}
        render={props =>
          isAuthenticated() ? (
            <AuthenticatedLayout>
              <UserComponent {...props} />
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
  }
}

PrivateRoute.propTypes = {
  component: PropTypes.func.isRequired,
};

export default PrivateRoute;
