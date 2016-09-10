import React from 'react';

export default class Partida extends React.Component {
  render() {
    return (
      <div>
        <h2>Estádio {this.props.estadio}</h2>
        <div>
          <span>Data: {this.props.data}</span>
          <span> - </span>
          <span>Hora: {this.props.horario}</span>
        </div>
      </div>
    );
  }
}
