import React from 'react';

import { Square } from './Square';

class Board extends React.Component {
  render() {
    return (
      <div>
        <div className="board-row">
          <Square onClick={() => this.props.onClick(0)} />
          <Square onClick={() => this.props.onClick(1)} />
          <Square onClick={() => this.props.onClick(2)} />
        </div>
        <div className="board-row">
          <Square onClick={() => this.props.onClick(3)} />
          <Square onClick={() => this.props.onClick(4)} />
          <Square onClick={() => this.props.onClick(5)} />
        </div>
        <div className="board-row">
          <Square onClick={() => this.props.onClick(6)} />
          <Square onClick={() => this.props.onClick(7)} />
          <Square onClick={() => this.props.onClick(8)} />
        </div>
      </div>
    );
  }
}

export { Board }
