import React, { Component } from 'react';
import { connect } from 'react-redux';

import Logo from '../Logo';

import style from './Header.css';
import Dropdown from '../Dropdown';

import { logout } from '../../states/user/actions';

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpenMenu: false,
    };

    this.initMenu();
  }

  toggleMenu = () => {
    const { isOpenMenu } = this.state;

    this.setState({
      isOpenMenu: !isOpenMenu,
    });
  };

  signOut = () => {
    this.props.dispatch(logout()).then(() => {
      window.location.reload();
    });
  };

  initMenu = () => {
    this.menuItems = [
      {
        id: 1,
        text: 'Cart',
        path: '/cart',
      },
      {
        id: 2,
        text: 'Sign out',
        path: '/',
        onClick: this.signOut,
      },
    ];
  };

  render() {
    const { user } = this.props;

    return (
      <header className={style.wrapper}>
        <div className={style.container}>
          <Logo path="/">Front-End</Logo>
          <div>
            <Dropdown
              text={user.name}
              items={this.menuItems}
              state={this.state.isOpenMenu}
              onClick={this.toggleMenu}
            />
          </div>
        </div>
      </header>
    );
  }
}

const connectToRedux = connect(state => ({
  user: state.user.data,
}));

export default connectToRedux(Header);
