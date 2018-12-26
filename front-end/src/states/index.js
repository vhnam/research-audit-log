import { combineReducers } from 'redux';

import user from './user/reducer';
import products from './products/reducer';
import order from './order/reducer';

export default combineReducers({
  user,
  products,
  order
});
