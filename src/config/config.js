import axios from 'axios'

export const APP_URL = "http://192.168.0.117:4040"

export const Get = (url, token = null, contentType = 'application/json') => {
    return new Promise((resolve, reject) => {
        axios.defaults.headers.Authorization = `Bearer ${token}`
        axios({
            method: 'get',
            baseURL: APP_URL,
            url: url,
            headers: {
                common: {
                    'Content-Type': contentType
                },
                Authorization: `Bearer ${token}`
            },
            responseType: 'json'
        })
            .then(result => {
                resolve(result)
            })
            .catch(error => {
                reject(error)
            })
    })
}

export const Post =  (url, token = null, body, contentType = 'application/json') => {
    return new Promise((resolve, reject) => {
        axios.defaults.headers.Authorization = `Bearer ${token}`
        axios({
            method: 'post',
            baseURL: APP_URL,
            url: url,
            headers: {
                common: {
                    'Content-Type': contentType
                },
                Authorization: `Bearer ${token}`
            },
            data: body
        })
            .then(result => {
                resolve(result)
            })
            .catch(error => {
                reject(error)
            })
    })
}

export const Patch = (url, token = null, body, contentType = 'application/json') => {
    return new Promise((resolve, reject) => {
        axios.defaults.headers.Authorization = `Bearer ${token}`
        axios({
            method: 'patch',
            baseURL: APP_URL,
            url: url,
            headers: {
                common: {
                    'Content-Type': contentType
                },
                Authorization: `Bearer ${token}`
            },
            data: body
        })
            .then(result => {
                resolve(result)
            })
            .catch(error => {
                reject(error)
            })
    })
}

export const Delete = (url, token = null, body, contentType = 'application/json') => {
    return new Promise((resolve, reject) => {
        axios.defaults.headers.Authorization = `Bearer ${token}`
        axios({
            method: 'delete',
            baseURL: APP_URL,
            url: url,
            headers: {
                common: {
                    'Content-Type': contentType
                },
                Authorization: `Bearer ${token}`
            },
            data: body
        })
            .then(result => {
                resolve(result)
            })
            .catch(error => {
                reject(error)
            })
    })
}