import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';

import './App.css';

import MainLayout from './layouts/main';

class App extends Component {
  render() {
    const { store } = this.props;

    return (
      <Provider store={store}>
        <MainLayout />
      </Provider>
    );
  }
}

App.propTypes = {
  store: PropTypes.object.isRequired,
};

export default App;
