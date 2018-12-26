const initialState = {
  data: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ORDER__SUCCESS':
      return {
        ...state,
        data: action.payload.data.order
      };
    case 'ORDER__FAILED':
      return Object.assign(
        {},
        {
          ...state,
          error: action.error,
        }
      );
    default:
      return state;
  }
};

export default reducer;
