import React, { Component } from 'react';
import PropTypes from 'prop-types';

import style from './TextField.css';

class TextField extends Component {
  render() {
    const {
      label,
      name,
      placeholder,
      index,
      onChange,
      value,
      type,
    } = this.props;

    return (
      <div className={style.wrapper}>
        <label className={style.label}>{label}</label>
        <input
          autoComplete="off"
          className={style.input}
          name={name}
          onChange={e => onChange(e.target.value)}
          placeholder={placeholder}
          spellCheck="false"
          tabIndex={index}
          type={type}
          value={!value ? '' : value}
        />
      </div>
    );
  }
}

TextField.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  index: PropTypes.number,
  onChange: PropTypes.func,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  type: PropTypes.string,
};

export default TextField;
