import React from 'react';
import './styles.css';
import america from './../assets/img/america.png';

export class Continente extends React.Component {

  constructor(props, context) {
    super(props, context);

    this.state = {
        name:this.props.location.state.name

    };
  }

  render(){
    return (
      <div className="Continente">
        <div className="Continente-raya"></div>
        <div className="Continente-rayitas"></div>
        <p className="Continente-text">{this.state.name}</p>
        <img className="Continente-map-america" src={america}></img>
      </div>
    );
  }
}

export default Continente;
