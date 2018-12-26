import { getSession, setSession, clearSession } from '../../utils/session';

const initialState = {
  data: getSession(),
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ORDER__SUCCESS':
      const { data } = action.payload;

      setSession(data);

      return {
        ...state,
        data,
      };
    case 'ORDER__FAILED':
      return Object.assign(
        {},
        {
          ...state,
          error: action.error,
        }
      );
    case 'LOGOUT':
      clearSession();

      return {
        data: {},
      };
    default:
      return state;
  }
};

export default reducer;
