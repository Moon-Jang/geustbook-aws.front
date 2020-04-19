import React from 'react';
import './App.css';
import classNames from 'classnames/bind';
import styles from './App.css';
import logo from './logo.svg';
import Guestbook from './Guestbook';
/* import axios from 'axios';

 const api = axios.create({
    baseURL : "http://127.0.0.1:3000",
    header: {
      Authorization : 'bearer accessKey'
    }
  });  */
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
            <div className={st('col-md-1','space-area','custom')}></div>
            <Guestbook/>
            <div className={st('col-md-1','space-area','custom')}></div>
          </div>
        </div>
      </div>
    </div>
  );
} 
export default App;