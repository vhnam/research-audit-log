import React, { Component } from 'react';
import style from './App.css';

class App extends Component {
  render() {
    return (
      <div className={style.wrapper}>
        <header className={style.header}>
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className={style.link}
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
