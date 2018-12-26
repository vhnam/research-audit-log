import { getSession, setSession } from '../../utils/session';

const initialState = {
  data: getSession(),
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN__SUCCESS':
      const { data } = action.payload;

      setSession(data);

      return {
        ...state,
        data,
      };
    case 'LOGIN__FAILED':
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
