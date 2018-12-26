import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import style from './Button.css';

class Button extends Component {
  render() {
    const { children, onClick, styles, type, size } = this.props;

    return (
      <button
        type={type}
        className={classnames(style.wrapper, style[styles], style[size])}
        onClick={onClick}
      >
        {children}
      </button>
    );
  }
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  styles: PropTypes.string,
  type: PropTypes.string,
  size: PropTypes.string,
};

export default Button;
