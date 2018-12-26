import React, { Component } from 'react';
import { Router, Switch, Route, Redirect } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

import { HomePage, LoginPage, ProductPage } from '../pages';

import PrivateRoute from './privateRoute';

const history = createHistory();

class MainLayout extends Component {
  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route path="/login" component={LoginPage} />

          <Route exact path="/products" render={() => <Redirect to="/" />} />

          <PrivateRoute exact path="/" component={HomePage} />
          <PrivateRoute exact path="/products/:id" component={ProductPage} />
        </Switch>
      </Router>
    );
  }
}

export default MainLayout;
