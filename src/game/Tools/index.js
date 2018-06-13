import React from 'react'

import './tools.css'

class Tools extends React.Component {
  render () {
    return (
      <div id="game-tools" className="elevate rounded">
        <button onClick={this.props.onNewMatch}>NEW GAME</button>
        <button onClick={this.props.onReset}>RESET BOARD</button>
      </div>
    )
  }
}

export { Tools };
