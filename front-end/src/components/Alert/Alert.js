import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import style from './Alert.css';

class Alert extends Component {
  render() {
    const { message, type } = this.props;

    return (
      <div className={classnames(style.wrapper, style[type])}>{message}</div>
    );
  }
}

Alert.propTypes = {
  type: PropTypes.oneOf(['success', 'warning', 'error']).isRequired,
};

export default Alert;
