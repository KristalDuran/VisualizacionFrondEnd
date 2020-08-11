import React from 'react';
import './styles.css';
import map from './../assets/img/sj-map.png';
import { getStateByID, getCitiesByStateID } from './../services/services';

export class Estado extends React.Component {

  constructor(props, context) {
    super(props, context);

    this.state = {
        id:this.props.location.state.id,
        info: {},
        cities:[]
    };
  }

  componentDidMount(){
    getStateByID( this.state.id,
    (data)=>{
      this.setState({info: data.data.content})
      console.log(data.data.content)
    }, 
    (error)=> {
      console.log(error)
    });
    getCitiesByStateID( this.state.id,
      (data)=>{
        this.setState({cities: data.data.content})
      }, 
      (error)=> {
        console.log(error)
      });
  }

  render(){
    return (
      <div className="Estado">
        <link href='https://fonts.googleapis.com/css?family=Glegoo' rel='stylesheet'></link>
        <div className="Estado-raya"></div>
        <div className="Estado-rayitas"></div>
        <p className="Estado-text">{this.state.info.name}</p>
        <div className= "Estado-flex">
          <div className= "Estado-info">
            <p className="Estado-info-texto">Población: {this.state.info.poblacion}</p>
            <p className="Estado-info-texto">Capital: {this.state.info.capital}</p>
            <p className="Estado-info-texto">Subdivisión: {this.state.info.subdivision}</p>
          </div>
          <img className="Estado-map" src={map}></img>
          <div className= "Estado-ciudades">
          {this.state.cities.map((element) => {
                return(
                  <div>
                    <p>{element.name}</p>
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

export default Estado;
