import React from 'react';

export default class BotaoGol extends React.Component {
  handleClick(e) {
    e.preventDefault();
    this.props.marcarGol();
  }
  
  render() {
    return (
      <div>
        <button onClick={this.handleClick.bind(this)}>GOL</button>
      </div>
    );
  }
}
