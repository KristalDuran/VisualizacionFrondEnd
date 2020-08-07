import React from 'react';
import './styles.css';
import america from './../assets/img/america.png';
import europa from './../assets/img/europa.png';
import asia from './../assets/img/asia.png';
import oceania from './../assets/img/australia.png';
import africa from './../assets/img/africa.png';
import polo from './../assets/img/polo.png';
import { Link } from 'react-router-dom';

export class Continente extends React.Component {

  constructor(props, context) {
    super(props, context);

    this.state = {
        name:this.props.location.state.name
    };
  }

  render(){
    let continente = '';
    if (this.state.name == "América"){
      continente = america
    }
    if (this.state.name == "Europa"){
      continente = europa
    }
    if (this.state.name == "África"){
      continente = africa
    }
    if (this.state.name == "Oceanía"){
      continente = oceania
    }
    if (this.state.name == "Antártida"){
      continente = polo
    }
    if (this.state.name == "Asia"){
      continente = asia
    }
    return (
      <div className="Continente">
        <link href='https://fonts.googleapis.com/css?family=Glegoo' rel='stylesheet'></link>
        <div className="Continente-raya"></div>
        <div className="Continente-rayitas"></div>
        <p className="Continente-text">{this.state.name}</p>
        <div className= "Continente-flex">
          <div className= "Continente-info">
            <p className="Continente-poblacion">Población: 970 040 000</p>
            <p className="Continente-superficie">Superficie: 42 549 000 km2</p>
          </div>
          <img className="Continente-map" src={continente}></img>
          <div className= "Continente-paises">
            <Link to={{
              pathname: "/pais",
              state: {name:"Costa Rica"}
            }}>
              <p>Costa Rica</p>
            </Link>
            <hr className="Continente-divisor"></hr>
            <p>México</p>
            <hr className="Continente-divisor"></hr>
            <p>Brasil</p>
            <hr className="Continente-divisor"></hr>
            <p>Panamá</p>
          </div>
          
        </div>
        
        
      </div>
    );
  }
}

export default Continente;
