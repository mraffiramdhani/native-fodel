import { APP_URL, Get, Post, Patch, Delete } from '../../config/config';

export const getCart = (jwt = null) => {
    return {
        type: 'GET_CART',
        payload: Get(APP_URL.concat('/cart'), jwt)
    }
}

export const getCartById = (jwt = null, id) => {
    return {
        type: 'GET_CART_BY_ID',
        payload: Get(APP_URL.concat('/cart/' + id), jwt)
    }
}

export const postCart = (jwt = null, data) => {
    return {
        type: 'POST_CART',
        payload: Post(APP_URL.concat('/cart'), jwt, data)
    }
}

export const patchCart = (jwt = null, id, data) => {
    return {
        type: 'PATCH_CART',
        payload: Patch(APP_URL.concat('/cart/' + id), jwt, data)
    }
}

export const deleteCart = (jwt = null, id) => {
    return {
        type: 'DELETE_CART',
        payload: Delete(APP_URL.concat('/cart/' + id), jwt)
    }
}

export const checkout = (jwt = null) => {
    return {
        type: 'CHECKOUT_CART',
        payload: Patch(APP_URL.concat('/checkout/cart'), jwt)
    }
}