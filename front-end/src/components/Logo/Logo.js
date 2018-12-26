import React, { Component } from 'react';
import PropTypes from 'prop-types';

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

Logo.propTypes = {
  children: PropTypes.node.isRequired,
  path: PropTypes.string.isRequired,
};

export default Logo;
