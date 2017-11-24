import Axios from 'axios';

const apiUrl = '/api/personas';
// Sync Action
export const fetchPersonasSuccess = (personas) => {
  return {
    type: 'USER/FETCH_PERSONAS_SUCCESS',
    payload: personas
  }
};
//Async Action
export const fetchPersonas = () => {
  // Returns a dispatcher function
  // that dispatches an action at a later time
  return (dispatch) => {
    // Returns a promise
    return Axios.get(apiUrl)
      .then(response => {
        // Dispatch another action
        // to consume data
        dispatch(fetchPersonasSuccess(response.data))
      })
      .catch(error => {
        throw(error);
      });
  };
};

export const selectPersona = (persona) => {
  return {
      type: 'USER/EDIT_USER',
      payload: persona
  }
};
export const addPersona = (persona) => {
  return {
      type: 'USER/ADD_USER',
      payload: persona
  }
};