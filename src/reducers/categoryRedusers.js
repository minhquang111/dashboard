const initialState = {
  list: [],
};
const categoryReducers = (state = initialState, action) => {
  switch (action.type) {
    case "GET_CATEGORY": {
      if (state.list) return state;
      return { list: action.payload };
    }

    default:
      return state;
  }
};

export default categoryReducers;
