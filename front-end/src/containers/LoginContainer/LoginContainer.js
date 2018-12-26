import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Alert, Button, TextField } from '../../components';

import style from './LoginContainer.css';

import { login } from '../../states/user/actions';

class LoginContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
    };
  }

  componentWillReceiveProps(nextProps) {
    const { history, user } = nextProps;

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
    );
  }
}

const connectToRedux = connect(state => ({
  user: state.user.data,
}));

export default connectToRedux(LoginContainer);
