import { combineReducers } from 'redux';

import item from './Item';
import category from './Category';
import restaurant from './Restaurant';
import cart from './Cart';
import auth from './Auth';

const appReducer = combineReducers({
    item,
    category,
    restaurant,
    cart,
    auth,
})

export default appReducer
