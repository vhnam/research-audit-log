const axios = require('axios');

const CONST = require('./constants');

const ORDER__SUCCESS = response => ({
  type: 'ORDER__SUCCESS',
  payload: response,
});

const ORDER__FAILED = err => ({
  type: 'ORDER__FAILED',
  payload: err,
});

const LOGOUT = () => ({
  type: 'LOGOUT',
  payload: null,
})

export const addToOrder = credentials => {
  return dispatch => {
    return axios
      .post(CONST.BASE_URL, {
        params: credentials
      })
      .then(response => {
        dispatch(ORDER__SUCCESS(response));
      })
      .catch(err => {
        dispatch(ORDER__FAILED(err));

        throw err;
      });
  };
};

export const logout = () => {
  return dispatch => {
    dispatch(LOGOUT());
  }
}