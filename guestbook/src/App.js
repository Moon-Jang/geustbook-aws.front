import React from 'react';
import './App.css';
import classNames from 'classnames/bind';
import styles from './App.css';
import logo from './logo.svg';
import Board from './Board';

const st = classNames.bind(styles);
function App() {
  return (
    <div id="App">
      <div id="background"></div>
      <div id="wrapper">
        <div id ="logo">
          <img src={logo} id="logo" alt="error"/>
        </div>
        <div className="container-fluid">
          <div className={st('row','custom')}>
            <div className={st('col-md-2','space-area','custom')}></div>
            <div className={st('col-md-8','context','custom')}>
              <Board />
            </div>
            <div className={st('col-md-2','space-area','custom')}></div>
          </div>
        </div>
      </div>
    </div>
  );
} 
export default App;