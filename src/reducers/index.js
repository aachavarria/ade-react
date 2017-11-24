import { combineReducers } from 'redux';
import personas from './personaReducers'
import activePersona from './activePersona.js';

export default combineReducers({
  personas: personas,
  activePersona: activePersona,
  // More reducers if there are
  // can go here
});
