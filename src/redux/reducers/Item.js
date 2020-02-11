const initialState = {
    count: 0,
    data: [],
    itemDetail: {},
    isLoading: false,
    isError: false,
    isSuccess: true
}

const item = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_POPULAR_ITEMS_PENDING':
            return {
                ...state,
                isLoading: true,
                isError: false,
                isSuccess: false,
            }
        case 'GET_POPULAR_ITEMS_REJECTED':
            return {
                ...state,
                data: [],
                isLoading: false,
                isError: true,
                isSuccess: false,
            }
        case 'GET_POPULAR_ITEMS_FULFILLED':
            return {
                ...state,
                count: action.payload.data.data.count,
                data: action.payload.data.data,
                isLoading: false,
                isError: false,
                isSuccess: action.payload.data.success,
            }

        case 'GET_ITEMS_PENDING':
            return {
                ...state,
                isLoading: true,
                isError: false,
                isSuccess: false,
            }
        case 'GET_ITEMS_REJECTED':
            return {
                ...state,
                data: [],
                isLoading: false,
                isError: true,
                isSuccess: false,
            }
        case 'GET_ITEMS_FULFILLED':
            return {
                ...state,
                count: action.payload.data.data.count,
                data: action.payload.data.data,
                isLoading: false,
                isError: false,
                isSuccess: action.payload.data.success,
            }

        case 'GET_ITEM_PENDING':
            return {
                ...state,
                isLoading: true,
                isError: false,
                isSuccess: false,
            }
        case 'GET_ITEM_REJECTED':
            return {
                ...state,
                data: [],
                itemDetail: {},
                isLoading: false,
                isError: true,
                isSuccess: false,
            }
        case 'GET_ITEM_FULFILLED':
            return {
                ...state,
                itemDetail: action.payload.data.data,
                isLoading: false,
                isError: false,
                isSuccess: action.payload.data.success,
            }

        case 'GET_LAST_ORDERED_PENDING':
            return {
                ...state,
                isLoading: true,
                isError: false,
                isSuccess: false,
            }
        case 'GET_LAST_ORDERED_REJECTED':
            return {
                ...state,
                isLoading: false,
                isError: true,
                isSuccess: false,
            }
        case 'GET_LAST_ORDERED_FULFILLED':
            return {
                ...state,
                data: action.payload.data.data,
                isLoading: false,
                isError: false,
                isSuccess: action.payload.data.success,
            }

        default:
            return state
    }
}

export default item