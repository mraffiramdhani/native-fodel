import {APP_URL, Post, Get} from '../../config/config';

export const login = (data) => {
    return {
        type: 'LOGIN',
        payload: Post(APP_URL.concat('/login'), null, data)
    }
}

export const register = (data) => {
	return {
		type: 'REGISTER',
		payload: Post(APP_URL.concat('/register'), null, data)
	}
}

export const logout = (jwt) => {
    return {
        type: 'LOGOUT',
        payload: Get(APP_URL.concat('/logout'), jwt)
    }
}