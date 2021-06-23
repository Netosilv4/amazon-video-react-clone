const INITIAL_STATE = {

};

const movieReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'currentMovie':
      return { ...action.value };
    default:
      return state;
  }
};

export default movieReducer;
