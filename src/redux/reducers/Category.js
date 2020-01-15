const initialState = {
    count: 0,
    data: [],
    isLoading: false,
    isError: false,
    isSuccess: true,
}

const category = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_CATEGORIES':
            return {
                ...state,
                data: [
                    { name: 'Drink', icon: 'drink.png' },
                    { name: 'Hamburger', icon: 'hamburger.png' },
                    { name: 'Salad', icon: 'salad.png' },
                    { name: 'Soup', icon: 'soup.png' },
                ],
            }
        default:
            return state
    }
}

export default category