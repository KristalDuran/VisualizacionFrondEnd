/**
 * Filename: Root.js
 * Author: kduran@akurey.com
 * Date: 06/03/2019
 * Description: Call roots 
 */
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Planeta from "./planeta/planet";
import { CookiesProvider } from 'react-cookie';
import store from './store/store';
import Main from './App';
import Continente from './continente/continente';
import Pais from './pais/pais';
import Estado from './estado/estado';

export default class Root extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <CookiesProvider>
        <Provider store={store}>
          <Router>
              <Switch>
                <Route path="/estado" component={Estado} />
                <Route path="/pais" component={Pais} />
                <Route path="/continente" component={Continente} />
                <Route path="/planetax" component={Planeta} />
                <Route path="/" component={Main} />
              </Switch>
            </Router>
        </Provider>
      </CookiesProvider>
    );
  }
}
