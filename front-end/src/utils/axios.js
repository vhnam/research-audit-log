import axios from 'axios';

import { getSession } from './session';

let axiosInstance = axios.create();

export const createAxios = () => {
  axiosInstance = axios.create({
    headers: {
      Authorization: getSession().accessToken,
    },
  });

  return axiosInstance;
};

export default axiosInstance;
