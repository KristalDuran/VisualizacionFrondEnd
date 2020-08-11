import React from 'react';
import './styles.css';
import map from './../assets/img/cr-map.png';
import { Link } from 'react-router-dom';
import { getCountryByID, getStateByCountryID } from './../services/services';

export class Pais extends React.Component {

  constructor(props, context) {
    super(props, context);

    this.state = {
        id:this.props.location.state.id,
        info:{},
        states: []
    };
  }

  componentDidMount(){
    getCountryByID( this.state.id,
    (data)=>{
      this.setState({info: data.data.content})
      console.log(data.data.content)
    }, 
    (error)=> {
      console.log(error)
    });
    getStateByCountryID( this.state.id,
      (data)=>{
        this.setState({states: data.data.content})
      }, 
      (error)=> {
        console.log(error)
      });
  }

  render(){
    return (
      <div className="Pais">
        <link href='https://fonts.googleapis.com/css?family=Glegoo' rel='stylesheet'></link>
        <div className="Pais-raya"></div>
        <div className="Pais-rayitas"></div>
        <p className="Pais-text">{this.state.info.name}</p>
        <div className= "Pais-flex">
          <div className= "Pais-info">
            <p className="Pais-info-texto">Capital: {this.state.info.capital}</p>
            <p className="Pais-info-texto">Prefijo telefónico: {this.state.info.prefix}</p>
            <p className="Pais-info-texto">Moneda: {this.state.info.currency}</p>
            <p className="Pais-info-texto">Población: {this.state.info.population}</p>
            <p className="Pais-info-texto">Presidente: {this.state.info.president}</p>
          </div>
          <img className="Pais-map" src={map}></img>
          <div className= "Pais-estados">
            {this.state.states.map((element) => {
                return(
                  <div>
                  <Link to={{
                    pathname: "/estado",
                    state: {id:element.id}
                  }}>
                    <p>{element.name}</p>
                  </Link>
                  <hr className="Pais-divisor"></hr>
                  </div>
                )
              })}
          </div>
          
        </div>
        
        
      </div>
    );
  }
}

export default Pais;
