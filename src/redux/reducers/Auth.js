const initialState = {
    data: [],
    isLoading: false,
    isError: false,
    isSuccess: true,
}

const auth = (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN':
            return {
                ...state,
                data: {
                    token: 'something',
                    name: 'Raffi Ramdhani',
                    username: 'raffiramdhani',
                }
            }
        case 'LOGOUT':
            return {
                ...state,
                data: [],
            }
        default:
            return state
    }
}

export default auth