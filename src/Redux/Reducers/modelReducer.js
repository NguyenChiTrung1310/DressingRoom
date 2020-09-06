let initialState = {
  topclothes: '',
  botclothes: '',
};

const ModelReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_CLOTH':
      state[action.payload.type] = action.payload.img;
    default:
      return state;
  }
};

export default ModelReducer;
