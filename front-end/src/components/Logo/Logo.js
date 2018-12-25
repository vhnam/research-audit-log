import React, { Component } from 'react';

import style from './Logo.css';

class Logo extends Component {
  render() {
    const { children, path } = this.props;

    return (
      <a className={style.logo} href={path}>
        {children}
      </a>
    );
  }
}

export default Logo;
