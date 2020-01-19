import {APP_URL, Get} from '../../config/config';

export const getCart = (jwt = null) => {
    return {
        type: 'GET_CART',
        payload: Get(APP_URL.concat('/cart'), jwt)
    }
}