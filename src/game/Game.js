import React from 'react';

import { Grid } from './Grid/'
import { ScoreBoard } from './ScoreBoard/'
import { Tools } from './Tools/'

import './game.css'

const getInitialState = () => {
  return {
    gameset: Array(9).fill(null),
    xIsNext: true,
    winner: null,
    score: {
      x: 0,
      o: 0,
    },
  };
}

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = getInitialState();
  }

  reset() {
    this.setState(getInitialState());
  }
  
  newMatch() {
    let matchState = getInitialState();
    matchState.score = this.state.score;
    console.log(matchState)
    this.setState(matchState);
  }

  selected(i) {
    let currentGame = this.state.gameset;
    if (currentGame[i] !== null || this.state.winner !== null) {
      return; // This cell has already been populated or the game has ended.
    }

    currentGame[i] = this.state.xIsNext ? "x": "o";
    this.setState({
      gameset: currentGame,
    });

    let winner = this.getWinner();
    if (winner !== null) {
      // Update score before setting new state.
      let currentScore = this.state.score;
      currentScore[winner]++;
      this.setState({
        winner: winner,
        score: currentScore,
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
    if (this.state.winner !== null) {
      console.log('We\'ve got a winner: ', this.state.winner);
    }
    return (
      <div id="game">
        <ScoreBoard
          winner={this.state.winner}
          score={this.state.score} />
        <Grid
          squares={this.state.gameset}
          onClick={i => this.selected(i)} />
        <Tools
          onReset={() => this.reset()}
          onNewMatch={() => this.newMatch()} />
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

export { Game }
