export default (state = [], action) => {
  switch (action.type) {
    case 'FETCH_PERSONAS_SUCCESS':
          return action.personas;
    default:
          return state;
  }
};
