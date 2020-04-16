import React from 'react';
import InputForm from './InputForm';
class Board extends React.Component {
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
      <InputForm/>
      );
  }
}
export default Board;