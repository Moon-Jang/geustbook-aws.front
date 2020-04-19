import React from 'react';
import classNames from 'classnames/bind';
import styles from './App.css';
 import axios from 'axios';

 const api = axios.create({
    baseURL : "http://127.0.0.1:3000",
    header: {
      Authorization : 'bearer accessKey'
    }
  }); 
  const st = classNames.bind(styles);
class InputForm extends React.Component {
  render() {
    return (
      <div className="InputFrom-wrapper">
        <form>
          <div className="row">
            <div className={st('col-md-3','input-idPw-area')}>
              <input type="text" placeholder="닉네임"></input>
              <input type="password" placeholder="비밀번호"></input>
            </div>
            <div className={st('col-md-9','input-text-area','custom')}>
              <input type="textarea" placeholder="text"></input>
            </div>
            <div className={st('col-md-12','register-btn-area')}>
              <button type="submit" id="btn-register">등록</button>
            </div>
          </div>
        </form>
      </div>
      );
  }
}
class Posts extends React.Component {
  render() {
    return (
      <div className={st('Posts-wrapper','row','body-area','custom')}>
        <div className={st('col-md-2','bno','custom')}>{this.props.bno}</div>
        <div className={st('col-md-6','title','custom')}>{this.props.contents.contents}</div>
        <div className={st('col-md-2','writer','custom')}>{this.props.contents.name}</div>
        <div className={st('col-md-2','create-date','custom')}>{this.props.contents.wdate}</div>
      </div>
      );
  }
}

class Guestbook extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contents: Array(10).fill({}),
    };
  }
  componentDidMount(){
    api.post("/read",{"page" : "1"}).then(
      res => {
        this.setState({contents : res.data});
      }
    ); 
  }

  render() {
    const contents = this.state.contents;
    const setPosts = contents.map( (cts,idx) => {
      return (<Posts
          contents = {cts}
          bno = {idx+1}
          key = {idx}
      />);
    });  
    return (
      <div className={st('col-md-10','context','custom')}>     
        <InputForm/>
        <div className="Board-wrapper">
          <div className='row head-area'>
            <div className={st('col-md-2','bno','custom')}>번호</div>
            <div className={st('col-md-6','title','custom')}>방명록</div>
            <div className={st('col-md-2','writer','custom')}>작성자</div>
            <div className={st('col-md-2','create-date','custom')}>작성일</div>
          </div>
          {setPosts}
          <div className = "line"></div>
        </div>
      </div>
      );
  }
}


export default Guestbook;