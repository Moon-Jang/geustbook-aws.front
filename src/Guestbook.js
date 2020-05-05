import React from 'react';
import classNames from 'classnames/bind';
import styles from './App.css';
 import axios from 'axios';

 const api = axios.create({
  baseURL : "https://guestbook.test.moonjang.net",
  withCredentials: true,
    headers: {
      Authorization : 'bearer accessKey',
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    }
  }); 
  const st = classNames.bind(styles);
class InputForm extends React.Component {
  handleSubmit =event =>{
    event.preventDefault();
    const form =document.querySelector('#writeForm');
    const formData = new FormData(form);
    const postData = {};
    formData.forEach((value, key) => {postData[key] = value});
    const json = JSON.stringify(postData);
     setTimeout(api.post("/write",json)
     .then(
      res => {
        console.log(res);
        form.reset();
    }),1000);
  };
    /* .then(
    res =>{ 
      console.log("then test");
      api.post("/read",{"page" : 1}).then(
        res => {
          console.log(res);
          this.setState({contents : res.data});
        }
      );
    }) */
  render() {
    console.log(this.props);
    return (
      <div className="InputFrom-wrapper">
        <form id="writeForm" onSubmit={this.handleSubmit}>
          <div className="row">
            <div className={st('col-md-3','input-idPw-area')}>
              <input type="text" name="name" placeholder="닉네임" required></input>
              <input type="password" name="password"placeholder="비밀번호" required></input>
            </div>
            <div className={st('col-md-9','input-text-area','custom')}>
              <input type="textarea" name="contents" placeholder="text" required></input>
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

class Paging extends React.Component{
  clickPage(pNum){
    api.post("/read",{"page" : pNum}).then(
      res => {
        this.setState({contents : res.data});
      }
    );
  }
  render(){
    return (
      <div className="Paging-wrapper">
        <ul>
          <li><button>[{this.props.curPage}]</button></li>
          <li><button>[{this.props.curPage+1}]</button></li>
          <li><button>[{this.props.curPage+2}]</button></li>
        </ul>
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
      contents: [],
      curPage : 1,
      maxPage : 99,
    };
    api.post("/read",{"page" : 1}).then(
      res => {
        this.setState({contents : res.data});
      }
    );
  }
  componentDidMount(){ 
      /* fetch('https://guestbook.test.moonjang.net/read', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'origin' : 'https://www.moonjang.net',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'cross-site',
        'abcd' : '1234',
      },
      body: JSON.stringify({page : 3})
    }).then(res =>  this.setState({contents : res.data})); */
    const test = () => {
      console.log(this.state.contents[0]);
    };
  }
  
  
  render() {
    const contents = this.state.contents;
    let setPosts = null;
    if(contents.length !== 0){
      setPosts = contents.map( (cts,idx) => {
        return (<Posts
            contents = {cts}
            bno = {idx+1}
            key = {idx}
        />);
      });
    }
    return (
      <div className={st('col-md-10','context','custom')}>     
        <InputForm
          contents = {this.state.contents}
        />
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
        <Paging
          curPage ={this.state.curPage}
        />
      </div>
      );
  }
}


export default Guestbook;