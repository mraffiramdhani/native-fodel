import { APP_URL, Get, Post, Delete } from '../../config/config';

export const getCart = (jwt = null) => {
    return {
        type: 'GET_CART',
        payload: Get(APP_URL.concat('/cart'), jwt)
    }
}

export const postCart = (jwt = null, data) => {
    return {
        type: 'POST_CART',
        payload: Post(APP_URL.concat('/cart'), jwt, data)
    }
}

export const deleteCart = (jwt = null, id) => {
    return {
        type: 'DELETE_CART',
        payload: Delete(APP_URL.concat('/cart/' + id), jwt)
    }
}