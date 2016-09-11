import React from 'react';

import Time from './Time';

import Partida from './Partida';

import Footer from './Footer';

export default class PlacarContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      gols_casa: 0,
      gols_visitante: 0
    };
  }

  marcarGolCasa() {
    this.setState({
      gols_casa: this.state.gols_casa + 1
    });
  }

  marcarGolVisitante() {
    this.setState({
      gols_visitante: this.state.gols_visitante + 1
    });
  }

  render() {
    const { partida, casa, visitante } = this.props;
    const estilo = {float: 'left', width: '33.333%'};

    return (
      <div style={{width: '100%'}}>
        <div style={{display: 'inline-block', width: '100%'}}>
          <div style={estilo}>
            <Time nome={casa.nome} gols={this.state.gols_casa} marcarGol={this.marcarGolCasa.bind(this)} />
          </div>
          <div style={estilo}>
            <Partida {...partida}/>
          </div>
          <div style={estilo}>
            <Time nome={visitante.nome} gols={this.state.gols_visitante} marcarGol={this.marcarGolVisitante.bind(this)}/>
          </div>
        </div>
        <div style={{clear: 'both', 'marginTop': '50px',}}>
          <Footer />
        </div>
      </div>
    );
  }
}


PlacarContainer.propTypes = {
  clima: React.PropTypes.string,
}

PlacarContainer.defaultProps = {
  clima: 'Ensolarado'
}
