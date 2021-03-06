const initialState = {
    data: [],
    isLoading: false,
    isError: false,
    isSuccess: true,
}

const auth = (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN_PENDING':
            return {
                ...state,
                isLoading: true,
                isError: false,
                isSuccess: false
            }
        case 'LOGIN_REJECTED':
            return {
                ...state,
                data: [],
                isLoading: false,
                isError: true,
                isSuccess: false
            }
        case 'LOGIN_FULFILLED':
            return {
                ...state,
                data: action.payload.data.data,
                isLoading: false,
                isError: false,
                isSuccess: action.payload.data.success,
            }

        case 'REGISTER_PENDING':
            return {
                ...state,
                isLoading: true,
                isError: false,
                isSuccess: false
            }
        case 'REGISTER_REJECTED':
            return {
                ...state,
                data: [],
                isLoading: false,
                isError: true,
                isSuccess: false
            }
        case 'REGISTER_FULFILLED':
            return {
                ...state,
                data: action.payload.data.data,
                isLoading: false,
                isError: false,
                isSuccess: action.payload.data.success,
            }

        case 'LOGOUT_PENDING':
            return {
                ...state,
                isLoading: true,
                isError: false,
                isSuccess: false,
            }
        case 'LOGOUT_REJECTED':
            return {
                ...state,
                isLoading: false,
                isError: true,
                isSuccess: false,
            }
        case 'LOGOUT_FULFILLED':
            return {
                ...state,
                data: [],
                isLoading: false,
                isError: false,
                isSuccess: true,
            }

        case 'CHANGE_PHOTO': 
            const result = {
                ...state
            };
            result.data.photo = action.photo;
            return result

        case 'GET_PROFILE_PENDING':
            return {
                ...state,
                isError: false,
                isSuccess: false,
            }
        case 'GET_PROFILE_REJECTED':
            return {
                ...state,
                isError: true,
                isSuccess: false,
            }
        case 'GET_PROFILE_FULFILLED':
            state.data.photo = action.payload.data.data.photo;
            return {
                ...state,
                isLoading: false,
                isError: false,
                isSuccess: action.payload.data.success,
            }

        case 'PATCH_USER_PENDING':
            return {
                ...state,
                isLoading: true,
                isError: false,
                isSuccess: false,
            }
        case 'PATCH_USER_REJECTED':
            return {
                ...state,
                isLoading: false,
                isError: true,
                isSuccess: false,
            }
        case 'PATCH_USER_FULFILLED':
            const res = {
                ...state,
                isLoading: false,
                isError: false,
                isSuccess: action.payload.data.success,
            }
            res.data.name = action.payload.data.data.name;
            res.data.username = action.payload.data.data.username;
            res.data.email = action.payload.data.data.email;
            res.data.token = action.payload.data.data.token;
            return res
        default:
            return state
    }
}

export default auth