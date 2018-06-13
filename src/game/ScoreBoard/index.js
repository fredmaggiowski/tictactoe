import React from 'react'

import { X, O } from '../Square'
import './scoreboard.css'

class PlayerScore extends React.Component {
  render() {
    let player = this.selectPlayer()
    if (player === null) {
      return (<span/>)
    }

    return (
      <div className="player">
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
    return (
      <div id="score-board" className="elevate rounded">
          <PlayerScore
            score={currentScore.x}
            player="x"/>
          <PlayerScore
            score={currentScore.o}
            player="o"/>
      </div>
    );   
  };
}

export { ScoreBoard };
