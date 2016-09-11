import React from 'react';

export default class Footer extends React.Component {


  render() {
    const estiloFooter = {
      'textAlign': 'center'
    };

    return (
      <div style={estiloFooter}>
        <p>Footer Placar</p>
      </div>
    );
  }
}
