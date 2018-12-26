import { createAxios } from '../../utils/axios';

const CONST = require('./constants');

const PRODUCTS__SUCCESS = response => ({
  type: 'PRODUCTS__SUCCESS',
  payload: response,
});

const PRODUCTS__FAILED = err => ({
  type: 'PRODUCTS__FAILED',
  payload: err,
});

const RESET = () => ({
  type: 'RESET',
  payload: null,
});

export const resetProducts = () => dispatch => {
  return new Promise((resolve) => {
    resolve(dispatch(RESET()));
  })
}

export const getProducts = page => {
  return dispatch => {
    const axios = createAxios();

    return axios
      .get(CONST.BASE_URL, {
        params: {
          page,
        },
      })
      .then(response => {
        dispatch(PRODUCTS__SUCCESS(response));
      })
      .catch(err => {
        dispatch(PRODUCTS__FAILED(err));

        throw err;
      });
  };
};
