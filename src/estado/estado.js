import React from 'react';
import './styles.css';
import map from './../assets/img/sj-map.png';
import { Link } from 'react-router-dom';

export class Estado extends React.Component {

  constructor(props, context) {
    super(props, context);

    this.state = {
        name:this.props.location.state.name
    };
  }

  render(){
    return (
      <div className="Estado">
        <link href='https://fonts.googleapis.com/css?family=Glegoo' rel='stylesheet'></link>
        <div className="Estado-raya"></div>
        <div className="Estado-rayitas"></div>
        <p className="Estado-text">{this.state.name}</p>
        <div className= "Estado-flex">
          <div className= "Estado-info">
            <p className="Estado-info-texto">Población: 1 635 144</p>
            <p className="Estado-info-texto">Capital: San José</p>
            <p className="Estado-info-texto">Subdivisión: 20 cantones</p>
          </div>
          <img className="Estado-map" src={map}></img>
          <div className= "Estado-ciudades">
            <p>San José</p>
            <hr className="Estado-divisor"></hr> 
            <p>Escazú</p>
            <hr className="Estado-divisor"></hr> 
            <p>Desamparados</p>
            <hr className="Estado-divisor"></hr> 
            <p>Perez Zeledón</p>
          </div>
          
        </div>
        
        
      </div>
    );
  }
}

export default Estado;
