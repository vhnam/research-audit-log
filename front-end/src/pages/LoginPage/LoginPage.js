import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Logo } from '../../components';

import LoginContainer from '../../containers/LoginContainer';

import style from './LoginPage.css';

class LoginPage extends Component {
  constructor(props) {
    super(props);

    const { history, user } = this.props;

    if (user.token) {
      history.replace({
        pathname: '/',
      });
    }
  }

  render() {
    return (
      <div className={style.wrapper}>
        <div className={style.container}>
          <div className={style.title}>
            <Logo path="/">Front-End</Logo>
          </div>
          <LoginContainer />
        </div>
      </div>
    );
  }
}

const connectToRedux = connect(state => ({
  user: state.user.data,
}));

export default connectToRedux(LoginPage);
