import React from 'react';
import classNames from 'classnames/bind';
import styles from './App.css';

const st = classNames.bind(styles);
class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contents: [
        {
          bno: 90,
          title : '나비보벳따우',
          writer : 'K.K',
          create_date : "12:12"
        },
        {
          bno: 2,
          title : '나비보벳따우2',
          writer : 'T.K',
          create_date : "22:44"
        }
      ],
    };
  }
  render() {
    const cts = this.state.contents;
    const posts = cts.map( (contents,idx) => {
      return (<Posts
          contents = {this.state.contents[idx]}
      />);
    });
    return (
      <div className="Board-wrapper">
        <div className='row head-area'>
          <div className={st('col-md-2','bno','custom')}>번호</div>
          <div className={st('col-md-6','title','custom')}>제목</div>
          <div className={st('col-md-2','writer','custom')}>글쓴이</div>
          <div className={st('col-md-2','create-date','custom')}>작성일</div>
        </div>
        {posts}
      </div>
      );
  }
}
class Posts extends React.Component {
  render() {
    return (
      <div className={st('Posts-wrapper','row','body-area','custom')}>
        <div className={st('col-md-2','bno','custom')}>{this.props.contents.bno}</div>
        <div className={st('col-md-6','title','custom')}>{this.props.contents.title}</div>
        <div className={st('col-md-2','writer','custom')}>{this.props.contents.writer}</div>
        <div className={st('col-md-2','create-date','custom')}>{this.props.contents.create_date}</div>
      </div>
      );
  }
}
export default Board;