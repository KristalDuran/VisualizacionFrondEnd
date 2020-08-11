import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';

import { getContinetByID, getCountriesByContinentID } from './../services/services';

export class Continente extends React.Component {

  constructor(props, context) {
    super(props, context);

    this.state = {
        id:this.props.location.state.id,
        info: {},
        countries: []
    };
  }

  componentDidMount(){
    getContinetByID(this.state.id,
      (data)=>{
        this.setState({info: data.data.content})
      }, 
      (error)=> {
        console.log(error)
      });
      getCountriesByContinentID(
        this.state.id,
      (data)=>{
        this.setState({countries: data.data.content})
      }, 
      (error)=> {
        console.log(error)
      }
      )
  }

  render(){
    return (
      <div className="Continente">
        <link href='https://fonts.googleapis.com/css?family=Glegoo' rel='stylesheet'></link>
        <div className="Continente-raya"></div>
        <div className="Continente-rayitas"></div>
        <p className="Continente-text">{this.state.info.name}</p>
        <div className= "Continente-flex">
          <div className= "Continente-info">
            <p className="Continente-poblacion">{this.state.info.poblation}</p>
            <p className="Continente-superficie">{this.state.info.superficie}</p>
          </div>
          <img className="Continente-map" src={this.state.info.img}></img>
          <div className= "Continente-paises">
            {this.state.countries.map((element) => {
              return(
                <div>
                <Link to={{
                  pathname: "/pais",
                  state: {id:element.id}
                }}>
                  <p>{element.name}</p>
                </Link>
                <hr className="Continente-divisor"></hr>
                </div>
              )
            })}
          </div>
          
        </div>
        
        
      </div>
    );
  }
}

export default Continente;
