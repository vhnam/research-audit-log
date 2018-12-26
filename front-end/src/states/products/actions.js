import axios from '../../utils/axios';

const CONST = require('./constants');

const PRODUCTS__SUCCESS = response => ({
  type: 'PRODUCTS__SUCCESS',
  payload: response,
});

const PRODUCTS__FAILED = err => ({
  type: 'PRODUCTS__FAILED',
  payload: err,
});

export const getProducts = page => {
  return dispatch => {
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
