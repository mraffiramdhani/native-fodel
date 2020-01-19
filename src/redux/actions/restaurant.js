import {APP_URL, Get} from '../../config/config';

export const getRestaurants = () => {
    return {
        type: 'GET_RESTAURANTS',
        payload: Get(APP_URL.concat('/restaurant'))
    }
}