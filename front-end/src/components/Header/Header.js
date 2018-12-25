import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Logo from '../Logo';

import style from './Header.css';

class Header extends Component {
  render() {
    return (
      <header className={style.wrapper}>
        <div className={style.container}>
          <Logo path="/">Front-End</Logo>
          <nav>
            <Link className={style.link} to="/">
              Homepage
            </Link>
            <Link className={style.link} to="/cart">
              Cart
            </Link>
          </nav>
        </div>
      </header>
    );
  }
}

export default Header;
