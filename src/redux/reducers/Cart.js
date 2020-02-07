const initialState = {
    count: 0,
    data: [],
    isLoading: false,
    isError: false,
    isSuccess: true,
}

const cart = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_CART_PENDING':
            return {
                ...state,
                isLoading: true,
                isError: false,
                isSuccess: false,
            }
        case 'GET_CART_REJECTED':
            return {
                ...state,
                isLoading: false,
                isError: true,
                isSuccess: false,
            }
        case 'GET_CART_FULFILLED':
            return {
                ...state,
                count: action.payload.data.data.length,
                data: action.payload.data.data,
                isLoading: false,
                isError: false,
                isSuccess: action.payload.data.success,
            }

        case 'POST_CART_PENDING':
            return {
                ...state,
                isLoading: true,
                isError: false,
                isSuccess: false,
            }
        case 'POST_CART_REJECTED':
            return {
                ...state,
                isLoading: false,
                isError: true,
                isSuccess: false,
            }
        case 'POST_CART_FULFILLED':
            return {
                ...state,
                count: action.payload.data.data.length,
                data: action.payload.data.data,
                isLoading: false,
                isError: false,
                isSuccess: action.payload.data.success,
            }
        case 'DELETE_CART_PENDING':
            return {
                ...state,
                isLoading: true,
                isError: false,
                isSuccess: false,
            }
        case 'DELETE_CART_REJECTED':
            return {
                ...state,
                isLoading: false,
                isError: true,
                isSuccess: false,
            }
        case 'DELETE_CART_FULFILLED':
            return {
                ...state,
                count: action.payload.data.data.length,
                data: action.payload.data.data,
                isLoading: false,
                isError: false,
                isSuccess: action.payload.data.success,
            }
        default:
            return state
    }
}

export default cart