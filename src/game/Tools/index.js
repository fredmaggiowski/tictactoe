import React from 'react'

import './tools.css'

class Tools extends React.Component {
  render () {
    return (
      <div id="game-tools" className="elevate">
        <button className="rounded elevate" onClick={this.props.onNewMatch}>NEW MATCH</button>
        <button className="rounded elevate" onClick={this.props.onReset}>RESET BOARD</button>
      </div>
    )
  }
}

export { Tools };
