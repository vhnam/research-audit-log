import React, { Component } from 'react';

import Logo from '../../components/Logo';
import TextField from '../../components/TextField';

import Button from '../../components/Button';

import style from './LoginPage.css';

class LoginPage extends Component {
  render() {
    return (
      <div className={style.wrapper}>
        <div className={style.container}>
          <div className={style.title}>
            <Logo path="/">Front-End</Logo>
          </div>
          <div className={style.card}>
            <TextField
              label="Username"
              type="text"
              placeholder="Enter username"
            />
            <TextField
              label="Password"
              type="password"
              placeholder="Enter password"
            />
            <div className={style.card_footer}>
              <Button type="button" style="primary">Log In</Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginPage;
