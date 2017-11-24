import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import {Provider} from 'react-redux';
import App from './components/App';
import { createLogger } from 'redux-logger';
import configureStore from './store/configureStore';
import * as personaActions from './actions/personaActions';
import Home from './components/Home/Home';
import Personas from './components/persona/personaPage';
import PersonaDetails from './components/PersonaDetail/PersonaDetail';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom';
//import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
const logger = createLogger();
const store = configureStore();
// store.dispatch(personaActions.fetchPersonas());

render((
  <Provider store={store}>
    <Router>
      <App>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/personas" component={Personas}/>
          <Route path="/editPersona" component={PersonaDetails}/>
        </Switch>
      </App>
    </Router>
  </Provider>
), document.getElementById('main'));
