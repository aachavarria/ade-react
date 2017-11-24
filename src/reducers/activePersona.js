export default (state = [], action) => {
    switch (action.type) {
      case 'USER/EDIT_USER':
            return action.payload;
      default:
          return state
    }
  };
  