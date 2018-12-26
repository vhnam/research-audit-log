import React, { Component } from 'react';
import { connect } from 'react-redux';

import Alert from '../../components/Alert';
import Button from '../../components/Button';
import Logo from '../../components/Logo';
import TextField from '../../components/TextField';

import style from './LoginPage.css';

import { login } from '../../states/user/actions';

class LoginPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
    };
  }

  componentWillReceiveProps(nextProps) {
    const {
      history,
      user,
    } = nextProps;

    if (user.token) {
      history.replace({
        pathname: '/',
      });
    }
  }

  handleChange = name => value => {
    this.setState({
      [name]: value,
    });
  };

  submit = e => {
    e.preventDefault();

    const { username, password } = this.state;

    this.props
      .dispatch(
        login({
          username,
          password,
        })
      )
      .catch(err => {
        this.setState({
          errorMessage: err.message,
        });
      });
  };

  render() {
    const { errorMessage } = this.state;

    return (
      <div className={style.wrapper}>
        <div className={style.container}>
          <div className={style.title}>
            <Logo path="/">Front-End</Logo>
          </div>
          <div className={style.card}>
            {errorMessage && <Alert type="error" message={errorMessage} />}
            <form onSubmit={this.submit}>
              <TextField
                label="Username"
                type="text"
                placeholder="Enter username"
                value={this.state.username}
                onChange={this.handleChange('username')}
              />
              <TextField
                label="Password"
                type="password"
                placeholder="Enter password"
                value={this.state.password}
                onChange={this.handleChange('password')}
              />
              <div className={style.card_footer}>
                <Button type="submit" styles="primary" size="block">
                  Log In
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const connectToRedux = connect(state => ({
  user: state.user.data
}));

export default connectToRedux(LoginPage);
