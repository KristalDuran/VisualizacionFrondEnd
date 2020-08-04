// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>

//       </header>
//     </div>
//   );
// }

import React from 'react';
import background from './assets/img/background1.png';
import lineas from './assets/img/lineas.png';
import tierra from './assets/img/tierra.gif';
import './App.css';
import Planet from './planeta/planet';
import Continente from './continente/continente';
function App() {
  return (
    // <div className="app">
    //   <img src={background} className="app__background"/>
    //   <div className='app__border'></div>
    //   <img src={lineas} className="app__header__linea"></img>
    //   <div className='app__container'>
    //     <p className='app__container__text'>CIUDADES</p>
    //     <p className='app__container__text'>DEL</p>
    //     <p className='app__container__text'>MUNDO</p>
    //   </div>
    //   <img src={tierra} className="app__tierra"/>
    // </div>
    <Continente></Continente>
  );
}
export default App;
