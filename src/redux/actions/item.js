import { APP_URL, Get } from '../../config/config';

export const getPopularItems = (jwt) => {
    return {
        type: 'GET_POPULAR_ITEMS',
        payload: Get(APP_URL.concat('/item?sort[created_at]=desc'), jwt)
    }
}

export const getItems = (jwt, params) => {
    return {
        type: 'GET_ITEMS',
        payload: Get(APP_URL.concat('/item?' + params), jwt)
    }
}

export const getItem = (jwt, id) => {
    return {
        type: 'GET_ITEM',
        payload: Get(APP_URL.concat('/item/' + id), jwt)
    }
}