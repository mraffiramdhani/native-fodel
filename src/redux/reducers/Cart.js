const initialState = {
    count: 0,
    data: [],
    isLoading: false,
    isError: false,
    isSuccess: true,
}

const cart = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_CART':
            return {
                ...state,
                data: [
                    {
                        item: {
                            name: "Kopi Teman Sejiwa",
                            image: "drink.jpg",
                            restaurant: "Teman Sejiwa",
                            rating: 4.7,
                            price: 12000
                        },
                        quantity: 3,
                        description: "Lorem Ipsum",
                    },
                    {
                        item: {
                            name: "Big Mac",
                            image: "hamburger.jpg",
                            restaurant: "MC Donalds",
                            rating: 4.0,
                            price: 32000
                        },

                        quantity: 1,
                        description: "Lorem Ipsum Dolor",
                    },
                    {
                        item: {
                            name: "Cheese Bomb",
                            image: "pizza.jpg",
                            restaurant: "Pizza Hut",
                            rating: 4.4,
                            price: 24000
                        },
                        quantity: 5,
                        description: "Lorem Ipsum Sit Amet",
                    },
                ],
            }
        default:
            return state
    }
}

export default cart