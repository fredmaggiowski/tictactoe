import React from 'react';

class Square extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }
  render() {
    return (
      <button className="square" onClick={this.props.onClick} />
    )
  };
}

export { Square };
