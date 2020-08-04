
import React from 'react';
import background from './assets/img/background1.png';
import lineas from './assets/img/lineas.png';
import tierra from './assets/img/tierra.gif';
import './App.css';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="app">
      <img src={background} className="app__background"/>
      <div className='app__border'></div>
      <img src={lineas} className="app__header__linea"></img>
      <div className='app__container'>
        <p className='app__container__text'>CIUDADES</p>
        <p className='app__container__text'>DEL</p>
        <p className='app__container__text'>MUNDO</p>
      </div>
      <Link to={{
        pathname: "/planetax",
        state: {}
      }}> 
        <img src={tierra} className="app__tierra"/>
      </Link>
    </div>
  );
}
export default App;
