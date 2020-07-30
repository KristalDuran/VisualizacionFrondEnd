import React from 'react';
import './styles.css';

export class Continente extends React.Component {

  constructor(props, context) {
    super(props, context);

    this.state = {
        name:this.props.name
    };
  }

  render(){
    return (
      <div className="Continente">
        <div className="Continente-raya"></div>
        <div className="Continente-rayitas"></div>
        <p className="Continente-text">{this.state.name}</p>
      </div>
    );
  }
}

export default Continente;
