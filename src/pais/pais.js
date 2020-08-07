import React from 'react';
import './styles.css';
import map from './../assets/img/cr-map.png';
import { Link } from 'react-router-dom';

export class Pais extends React.Component {

  constructor(props, context) {
    super(props, context);

    this.state = {
        name:this.props.location.state.name
    };
  }

  render(){
    return (
      <div className="Pais">
        <link href='https://fonts.googleapis.com/css?family=Glegoo' rel='stylesheet'></link>
        <div className="Pais-raya"></div>
        <div className="Pais-rayitas"></div>
        <p className="Pais-text">{this.state.name}</p>
        <div className= "Pais-flex">
          <div className= "Pais-info">
            <p className="Pais-info-texto">Capital: San José</p>
            <p className="Pais-info-texto">Prefijo telefónico: +506</p>
            <p className="Pais-info-texto">Moneda: Colón costarricense</p>
            <p className="Pais-info-texto">Población: 4 999 000</p>
            <p className="Pais-info-texto">Presidente: Carlos Alvarado</p>
          </div>
          <img className="Pais-map" src={map}></img>
          <div className= "Pais-estados">
            <Link to={{
              pathname: "/estado",
              state: {name:"San José"}
            }}>
              <p>San José</p>
            </Link>
            <hr className="Pais-divisor"></hr> 
            <p>Alajuela</p>
            <hr className="Pais-divisor"></hr> 
            <p>Cartago</p>
            <hr className="Pais-divisor"></hr> 
            <p>Heredia</p>
          </div>
          
        </div>
        
        
      </div>
    );
  }
}

export default Pais;
