import React, { Component } from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

import {
  HomePage,
  LoginPage
} from '../pages';

import PrivateRoute from './privateRoute';

const history = createHistory();

class MainLayout extends Component {
  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route exact path="/login" component={LoginPage} />

          <PrivateRoute exact path="/" component={HomePage} />
        </Switch>
      </Router>
    );
  }
}

export default MainLayout;
