import axios from 'axios'
import storage from '../redux/store';

const {store} = storage()

export const APP_URL = "http://localhost:4040"

export const Get = (url, contentType = 'application/json') => {
    return new Promise((resolve, reject) => {
        axios.defaults.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
        axios({
            method: 'get',
            baseURL: APP_URL,
            url: url,
            headers: {
                common: {
                    'Content-Type': contentType
                },
                Authorization: `Bearer ${localStorage.getItem('token')}`
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

export const Post = (url, body, contentType = 'application/json') => {
    return new Promise((resolve, reject) => {
        axios.defaults.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
        axios({
            method: 'post',
            baseURL: APP_URL,
            url: url,
            headers: {
                common: {
                    'Content-Type': contentType
                },
                Authorization: `Bearer ${localStorage.getItem('token')}`
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

export const Patch = (url, body, contentType = 'application/json') => {
    return new Promise((resolve, reject) => {
        axios.defaults.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
        axios({
            method: 'patch',
            baseURL: APP_URL,
            url: url,
            headers: {
                common: {
                    'Content-Type': contentType
                },
                Authorization: `Bearer ${localStorage.getItem('token')}`
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

export const Delete = (url, body, contentType = 'application/json') => {
    return new Promise((resolve, reject) => {
        axios.defaults.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
        axios({
            method: 'delete',
            baseURL: APP_URL,
            url: url,
            headers: {
                common: {
                    'Content-Type': contentType
                },
                Authorization: `Bearer ${localStorage.getItem('token')}`
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