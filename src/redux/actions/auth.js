import {APP_URL, Post, Get} from '../../config/config';

export const login = (data) => {
    return {
        type: 'LOGIN',
        payload: Post(APP_URL.concat('/login'), data)
    }
}

export const register = (data) => {
	return {
		type: 'REGISTER',
		payload: Post(APP_URL.concat('/register'), data)
	}
}

export const logout = () => {
    return {
        type: 'LOGOUT',
        payload: Get(APP_URL.concat('/logout'))
    }
}