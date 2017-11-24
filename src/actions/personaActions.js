import Axios from 'axios';

const apiUrl = '/api/personas';
// Sync Action
export const fetchPersonasSuccess = (personas) => {
  return {
    type: 'FETCH_PERSONAS_SUCCESS',
    personas
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
