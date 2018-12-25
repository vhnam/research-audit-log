import React, { Component } from 'react';
import PropTypes from 'prop-types';

import style from './Button.css';

const classnames = require('classnames/bind');

const cx = classnames.bind(style);

class Button extends Component {
  render() {
    const { children, onlClick, style, type } = this.props;

    return (
      <button type={type} className={cx('wrapper', style)} onClick={onlClick}>
        {children}
      </button>
    );
  }
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  style: PropTypes.string,
  type: PropTypes.string,
};

export default Button;
