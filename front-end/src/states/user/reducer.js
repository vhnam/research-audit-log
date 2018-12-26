import { getSession } from '../../utils/session';

const initialState = {
  data: getSession()
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN__SUCCESS':
      return {
        ...state,
        data: action.payload.data
      };
    case 'LOGIN__FAILED':
      return Object.assign({},
        {
          ...state,
          error: action.error
        }
      );
    default:
      return state;
  }
};

export default reducer;
