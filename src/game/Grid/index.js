import React from 'react';

import { Square } from '../Square';

import './grid.css'

class Grid extends React.Component {
  render() {
    return (
      <div id="game-grid" className="elevate">
        <div className="grid-row">
          <Square 
            value={this.props.squares[0]}
            onClick={() => this.props.onClick(0)} />
          <Square 
            value={this.props.squares[1]}
            onClick={() => this.props.onClick(1)} />
          <Square
            value={this.props.squares[2]}
            onClick={() => this.props.onClick(2)} />
        </div>
        <div className="grid-row">
          <Square
            value={this.props.squares[3]}
            onClick={() => this.props.onClick(3)} />
          <Square
            value={this.props.squares[4]}
            onClick={() => this.props.onClick(4)} />
          <Square
            value={this.props.squares[5]}
            onClick={() => this.props.onClick(5)} />
        </div>
        <div className="grid-row">
          <Square
            value={this.props.squares[6]}
            onClick={() => this.props.onClick(6)} />
          <Square
            value={this.props.squares[7]}
            onClick={() => this.props.onClick(7)} />
          <Square
            value={this.props.squares[8]}
            onClick={() => this.props.onClick(8)} />
        </div>
      </div>
    );
  }
}

export { Grid };
