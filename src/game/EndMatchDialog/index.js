import React from 'react';

import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import Button from '@material-ui/core/Button';

import { X, O} from '../Square'

import './endmatchdialog.css'

class EndMatchDialog extends React.Component {

  handleClose = () => {
    this.props.onClose('newgame');
  };

  setChoiceNew = () => {
    this.props.onClose('newgame')
  }
  setChoiceReset = () => {
    this.props.onClose('reset')
  }

  render () {

    let title = '';
    if (this.props.winner !== null) {
      let player = this.selectWinner(this.props.winner);
      title = <div>PLAYER {player} WON</div>;
    } else if (this.props.draw) {
      title = 'GAME IS A DRAW!';
    }

    return (
      <Dialog id="end-match-dialog" open={this.props.open} onClose={this.handleClose}>
        <DialogTitle id="end-match-dialog-title">
          {title}
        </DialogTitle>
        <div id="end-matching-dialog-button-wrapper">
          <Button className="default" onClick={this.setChoiceNew}>NEW MATCH</Button>
          <Button className="default" onClick={this.setChoiceReset}>RESET BOARD</Button>
        </div>
      </Dialog>
    )
  }

  selectWinner(winner) {
    switch (winner) {
    case 'x':
      return X({small:true});
    case 'o':
      return O({small:true});
    default:
      return null;
    }
  }
}

export { EndMatchDialog }