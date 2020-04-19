import React from 'react';
import classNames from 'classnames/bind';
import styles from './App.css';

const st = classNames.bind(styles);

class InputForm extends React.Component {
  /* renderSquare(i) {
    return (
      <Square
        value={this.props.squares[i]}
        onClick={() => this.props.onClick(i)}
      />
    );
  } */
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
export default InputForm;