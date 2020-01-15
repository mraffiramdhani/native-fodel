const initialState = {
    count: 0,
    data: [],
    isLoading: false,
    isError: false,
    isSuccess: true,
}

const restaurant = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_RESTAURANTS':
            return {
                ...state,
                data: [
                    { name: "Starbucks", icon: "starbucks.jpg" },
                    { name: "Mc Donalds", icon: "mcd.jpg" },
                    { name: "Pizza Hut", icon: "pizza-hut.png" },
                    { name: "Bu Otang", icon: "chef.jpg" },
                ]
            }
        default:
            return state
    }
}

export default restaurant