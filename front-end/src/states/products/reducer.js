const initialState = {
  data: [],
  pagination: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'PRODUCTS__SUCCESS':
      const products = action.payload.data.data;

      let pagination = action.payload.data;
      delete pagination.data;

      return {
        ...state,
        data: [...state.data, ...products],
        pagination: pagination,
      };
    case 'PRODUCTS__FAILED':
      return Object.assign(
        {},
        {
          ...state,
          error: action.error,
        }
      );
    case 'RESET':
      return {
        ...state,
        data: [],
        pagination: null,
      };
    default:
      return state;
  }
};

export default reducer;
