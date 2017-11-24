import 'babel-polyfill';
import React from 'react';
import ReactDOM from "react-dom";
import {Provider} from 'react-redux';
import App from './components/App';
import configureStore from './store/configureStore';
import * as personaActions from './actions/personaActions';
//import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const store = configureStore();
store.dispatch(personaActions.fetchPersonas());

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('main')
);
