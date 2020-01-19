import {APP_URL, Get} from '../../config/config';

export const getPopularItems = () => {
    return {
        type: 'GET_POPULAR_ITEMS',
        payload: Get(APP_URL.concat('/item?sort[rating]=desc'))
    }
}

export const getItems = (params) => {
    return {
        type: 'GET_ITEMS',
        payload: Get(APP_URL.concat('/item?'+params))
    }
}

export const getItem = (id) => {
    return {
        type: 'GET_ITEM',
        payload: Get(APP_URL.concat('/item/'+id))
    }
}