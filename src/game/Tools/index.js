import React from 'react'

import Button from '@material-ui/core/Button'

import './tools.css'

class Tools extends React.Component {
  render () {
    return (
      <div id="game-tools">
        <Button className="default elevate" onClick={this.props.onNewMatch}>NEW MATCH</Button>
        <Button className="default elevate" onClick={this.props.onReset}>RESET BOARD</Button> 
      </div>
    )
  }
}

export { Tools };
