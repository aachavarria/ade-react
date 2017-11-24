import { combineReducers } from 'redux';
import personas from './personaReducers'

export default combineReducers({
  personas: personas,
  // More reducers if there are
  // can go here
});
