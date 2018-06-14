import React from 'react'

import { X, O } from '../Square'
import './scoreboard.css'

class PlayerScore extends React.Component {
  render() {
    let player = this.selectPlayer()
    if (player === null) {
      return (<span/>)
    }

    let turnClass;
    if (this.props.player === this.props.turn) {
      turnClass = "turn"
    }

    return (
      <div className={"player rounded " + turnClass}>
        {player} <span className="score">{this.props.score}</span>
      </div>
    )
  }

  selectPlayer() {
    switch (this.props.player) {
    case 'x':
      return X({small:true});
    case 'o':
      return O({small:true});
    default:
      return null;
    }
  }
}

class ScoreBoard extends React.Component {
  render() {
    let currentScore = this.props.score;
    let playerTurn = this.props.turn
    return (
      <div id="score-board" className="elevate">
          <PlayerScore
            score={currentScore.x}
            turn={playerTurn}
            player="x"/>
          <div>Tic Tac Toe</div>
          <PlayerScore
            score={currentScore.o}
            turn={playerTurn}
            player="o"/>
      </div>
    );   
  };
}

export { ScoreBoard };
