import React from 'react';

import './square.css'

class Square extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }
  render() {
    let sign;
    switch (this.props.value) {
      case 'x':
        sign = X();
        break;
      case 'o':
        sign = O();
        break;
      default:
        break;
    }
    
    return (
      <button className="square" onClick={this.props.onClick}>
        {sign}
      </button>
    )
  };
}

function X(props) {
  return (
    (props !== undefined && props.small === true) ?
      <svg width="30" height="30" viewBox="0 21 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" className="x-sign">
        <line y1="-2.5" x2="30" y2="-2.5" transform="translate(4 46.4264) rotate(-45)" stroke="#26418f" strokeWidth="5"/>
        <path d="M1.07896e-05 5.47909e-06H30" transform="translate(23.4264 44.4264) rotate(-135)" stroke="#26418f" strokeWidth="5"/>
      </svg>
    :
      <svg width="153" height="152" viewBox="0 0 153 152" fill="none" xmlns="http://www.w3.org/2000/svg" className="x-sign">
        <line y1="-5" x2="200" y2="-5" transform="translate(8 151.421) rotate(-45)" stroke="#26418f" strokeWidth="10"/>
        <line y1="-5" x2="200" y2="-5" transform="translate(152.421 141.421) rotate(-135)" stroke="#26418f" strokeWidth="10"/>
      </svg>

  );
}

function O(props) {
  return (
    (props !== undefined && props.small === true) ?
      <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" className="o-sign">
        <circle cx="13" cy="13" r="10.5" fill="transparent" stroke="#8e99f3" strokeWidth="5"/>
      </svg>
    :
      <svg width="150" height="150" viewBox="0 0 150 150" fill="none" xmlns="http://www.w3.org/2000/svg" className="o-sign">
       <circle cx="75" cy="75" r="70" fill="white" stroke="#8e99f3" strokeWidth="10"/>
      </svg>
  );
}

export { Square, X, O };
