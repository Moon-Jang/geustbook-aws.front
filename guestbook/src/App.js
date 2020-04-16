import React from 'react';
import './App.css';
import classNames from 'classnames/bind';
import styles from './App.css';
import logo from './logo.svg';

const st = classNames.bind(styles);
function App() {
  return (
    <div id="App">
      <div id="background"></div>
      <div id="wrapper">
        <div id ="logo">
          <img src={logo} id="logo" alt="error"/>
        </div>
        <div className="container">
          <div className="row">
            <div className={st('col-md-2','space-area')}></div>
            <div className={st('col-md-8','context')}></div>
            <div className={st('col-md-2','space-area')}></div>
          </div>
        </div>
      </div>
    </div>
  );
} 
export default App;