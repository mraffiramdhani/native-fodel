const initialState = {
    count: 0,
    data: [],
    isLoading: false,
    isError: false,
    isSuccess: true,
}

const restaurant = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_RESTAURANTS_PENDING':
            return {
                ...state,
                data: [],
                isLoading: true,
                isError: false,
                isSuccess: false,
            }
        case 'GET_RESTAURANTS_REJECTED':
            return {
                ...state,
                data: [],
                isLoading: false,
                isError: true,
                isSuccess: false,
            }
        case 'GET_RESTAURANTS_FULFILLED':
            return {
                ...state,
                count: action.payload.data.data.restaurants.length,
                data: action.payload.data.data,
                isLoading: false,
                isError: false,
                isSuccess: action.payload.data.success,
            }
        default:
            return state
    }
}

export default restaurant