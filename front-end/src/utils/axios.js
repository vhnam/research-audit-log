import axios from 'axios';

import { getSession } from './session';

export default axios.create({
  headers: {
    Authorization: getSession().accessToken,
  },
});
