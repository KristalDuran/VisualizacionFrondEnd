import React from 'react';
import './styles.css';
import europa from './../assets/img/europa.png';
import america from './../assets/img/america.png';
import asia from './../assets/img/asia.png';
import australia from './../assets/img/australia.png';
import africa from './../assets/img/africa.png';
import polo from './../assets/img/polo.png';
import { Link } from 'react-router-dom';
export class Planet extends React.Component {

  constructor(props, context) {
    super(props, context);

    this.state = {
    };
  }

  render(){
    return (
      <div className="Planet">
        <div className="Planet-raya"></div>
        <div className="Planet-rayitas"></div>
        <p className="Planet-text">Ciudades del Mundo</p>
        <div className="Planet-map">
          <Link to={{
            pathname: "/continente",
            state: {name:"America"}
          }}> 
            <img className="Planet-map-america" src={america}></img>
          </Link>
            <img className="Planet-map-europa" src={europa}></img>
            <img className="Planet-map-asia" src={asia}></img>
            <img className="Planet-map-africa" src={africa}></img>
            <img className="Planet-map-australia" src={australia}></img>
            <img className="Planet-map-polo" src={polo}></img>
        </div>
      </div>
    );
    }
}

export default Planet;
