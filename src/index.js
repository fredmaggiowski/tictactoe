import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import {Board} from './Board'

const initialState = {
  gameset: Array(9).fill(null),
  xIsNext: true,
  winner: null,
};

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = initialState;
  }

  reset() {
    this.setState(initialState);
  }

  selected(i) {
    let currentGame = this.state.gameset;
    currentGame[i] = this.state.xIsNext ? "x": "o";
    this.setState({
      gameset: currentGame,
    });
    let winner = this.getWinner();
    if (winner !== null) {
      this.setState({
        winner: winner,
      });
      return;
    }
    this.setState({
      gameset: this.state.gameset,
      xIsNext: !this.state.xIsNext,
    })
    console.log('Selected updates gameset', this.state.gameset);
  }

  render() {
    console.log('Render gameset', this.state.gameset);
    if (this.state.winner !== null) {
      console.log('We\'ve got a winner: ', this.state.winner);
    }
    return (
      <div className="game">
        <div className="game-board">
          <Board
            squares={this.state.gameset}
            onClick={i => this.selected(i)} />
        </div>
      </div>
    );
  }

  getWinner() {
    console.log('Getting a winner');
    const winningCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < winningCombinations.length; i++) {
      const [a, b, c] = winningCombinations[i];
      if (this.state.gameset[a] !== null &&
          this.state.gameset[a] === this.state.gameset[b] && 
          this.state.gameset[b] === this.state.gameset[c]) {
        console.log('Found a winner: ', this.state.gameset[a]);
        return this.state.gameset[a];
      }
    }
    return null;
  };
}

// ========================================

ReactDOM.render(<Game />, document.getElementById("root"));
