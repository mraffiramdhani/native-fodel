import { combineReducers } from 'redux';

import item from './Item';
import category from './Category';
import restaurant from './Restaurant';
import cart from './Cart';

const appReducer = combineReducers({
    item,
    category,
    restaurant,
    cart,
})

export default appReducer
