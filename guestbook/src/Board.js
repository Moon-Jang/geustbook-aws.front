import React from 'react';
import classNames from 'classnames/bind';
import styles from './App.css';
import Posts from './Posts';

const st = classNames.bind(styles);
class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state ={}
  }
  render() {
    return (
      <div className="Board-wrapper">
        <div className={st('row','head-area')}>
          <div className={st('col-md-2','bno','custom')}>번호</div>
          <div className={st('col-md-6','title','custom')}>제목</div>
          <div className={st('col-md-2','writer','custom')}>글쓴이</div>
          <div className={st('col-md-2','create-date','custom')}>작성일</div>
        </div>
        <Posts/>
        
      </div>
      );
  }
}
export default Board;