const axios = require('axios');

const CONST = require('./constants');

const LOGIN__SUCCESS = response => ({
  type: 'LOGIN__SUCCESS',
  payload: response,
});

const LOGIN__FAILED = err => ({
  type: 'LOGIN__FAILED',
  payload: err,
});

const LOGOUT = () => ({
  type: 'LOGOUT',
  payload: null,
});

export const login = credentials => {
  return dispatch => {
    return axios
      .post(`${CONST.BASE_URL}/login`, credentials)
      .then(response => {
        dispatch(LOGIN__SUCCESS(response));
      })
      .catch(err => {
        dispatch(LOGIN__FAILED(err));

        throw err;
      });
  };
};

export const logout = credentials => {
  return dispatch => {
    return axios
      .post(`${CONST.BASE_URL}/logout`, credentials)
      .then(() => {
        dispatch(LOGOUT());
      })
      .catch(err => {
        throw err;
      });
  }
}