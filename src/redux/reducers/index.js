import { combineReducers } from 'redux';

import item from './Item';
import category from './Category';
import restaurant from './Restaurant';

const appReducer = combineReducers({
    item,
    category,
    restaurant,
})

export default appReducer
