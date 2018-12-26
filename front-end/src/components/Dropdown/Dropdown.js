import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import style from './Dropdown.css';

class Dropdown extends Component {
  render() {
    const { text, items, state, onClick } = this.props;

    return (
      <div className={style.wrapper} onClick={onClick}>
        {text}
        {state && (
          <div className={style.menu}>
            {items.map(item => (
              <Link
                key={item.id}
                className={style.link}
                to={item.path}
                onClick={item.onClick}
              >
                {item.text}
              </Link>
            ))}
          </div>
        )}
      </div>
    );
  }
}

Dropdown.propTypes = {
  text: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired,
  state: PropTypes.bool,
  onClick: PropTypes.func,
};

export default Dropdown;
