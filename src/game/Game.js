import React from 'react';

import { EndMatchDialog } from './EndMatchDialog';
import { Grid } from './Grid'
import { ScoreBoard } from './ScoreBoard'
import { Tools } from './Tools'

import './game.css'

const getInitialState = () => {
  return {
    gameset: Array(9).fill(null),
    xIsNext: true,
    winner: null,
    draw: false,
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
    this.setState(matchState);
  }

  selected(i) {
    let currentGame = this.state.gameset;
    if (currentGame[i] !== null || this.state.winner !== null) {
      return; // This cell has already been populated or the game has ended.
    }

    // Update next in turn.
    currentGame[i] = this.state.xIsNext ? "x": "o";
    this.setState({
      gameset: currentGame,
    });

    // Verify if there's a winner.
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

    // Verify is the match is a draw.
    let draw = this.isDraw()
    if (draw) {
      this.setState({
        draw: true,
        score: this.state.score,
      });
      return;
    }

    // Update gameset, turn an continue playing!
    this.setState({
      gameset: this.state.gameset,
      xIsNext: !this.state.xIsNext,
    })
  }

  render() {
    return (
      <div id="game">
        <ScoreBoard
          winner={this.state.winner}
          score={this.state.score} 
          turn={this.state.xIsNext?'x':'o'} />
        <Grid
          squares={this.state.gameset}
          onClick={i => this.selected(i)} />
        <Tools
          onReset={() => this.reset()}
          onNewMatch={() => this.newMatch()} />
        <EndMatchDialog 
          open={this.state.winner !== null || this.state.draw} 
          winner={this.state.winner} 
          draw={this.state.draw}
          onClose={(choice) => this.dialogClosed(choice) } />
      </div>
    );
  }

  getWinner() {
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
        return this.state.gameset[a];
      }
    }
    return null;
  };

  isDraw() {
    let filtered = this.state.gameset.filter((square) => (square === null));
    return (filtered.length === 0);
  };

  dialogClosed(choice) {
    switch (choice) {
      case 'reset':
        this.reset();
        return;
      case 'newmatch':
      default:
        this.newMatch()
        return;
    }
  };
}

export { Game }
