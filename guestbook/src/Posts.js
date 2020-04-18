import React from 'react';
import classNames from 'classnames/bind';
import styles from './App.css';

const st = classNames.bind(styles);
class Posts extends React.Component {
  render() {
    return (
      <div className={st('Posts-wrapper','row','body-area','custom')}>
        <div className={st('col-md-2','bno','custom')}>1</div>
        <div className={st('col-md-6','title','custom')}>나비보벳따우</div>
        <div className={st('col-md-2','writer','custom')}>K.K</div>
        <div className={st('col-md-2','bno','custom')}>12:12</div>
      </div>
      );
  }
}
export default Posts;