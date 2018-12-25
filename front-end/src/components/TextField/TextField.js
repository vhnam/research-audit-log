import React, { Component } from 'react';

import style from './TextField.css';

class TextField extends Component {
  render() {
    const { label } = this.props;

    return (
      <div className={style.wrapper}>
        <label className={style.label}>{label}</label>
        <input {...this.props} className={style.input} spellCheck="false" />
      </div>
    );
  }
}

export default TextField;
