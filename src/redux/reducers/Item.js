const initialState = {
    count: 0,
    data: [],
    isLoading: false,
    isError: false,
    isSuccess: true
}

const item = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_POPULAR_ITEMS':
            return {
                ...state,
                data: [
                    { name: "Kopi Teman Sejiwa", image: "drink.jpg", restaurant: "Teman Sejiwa", rating: 4.7, price: 12000 },
                    { name: "Big Mac", image: "hamburger.jpg", restaurant: "MC Donalds", rating: 4.0, price: 32000 },
                    { name: "Cheese Bomb", image: "pizza.jpg", restaurant: "Pizza Hut", rating: 4.4, price: 24000 },
                    { name: "Salad Buah", image: "salad.jpg", restaurant: "Bu Otang", rating: 4.2, price: 14000 },
                    { name: "Sup Labu", image: "soup.jpg", restaurant: "Bu Otang", rating: 4.7, price: 10000 },
                ],
            }
        case 'GET_ITEMS':
            return {
                ...state,
                data: [
                    { name: "Kopi Teman Sejiwa", image: "drink.jpg", restaurant: "Teman Sejiwa", rating: 4.7, price: 12000 },
                    { name: "Big Mac", image: "hamburger.jpg", restaurant: "MC Donalds", rating: 4.0, price: 32000 },
                    { name: "Cheese Bomb", image: "pizza.jpg", restaurant: "Pizza Hut", rating: 4.4, price: 24000 },
                    { name: "Salad Buah", image: "salad.jpg", restaurant: "Bu Otang", rating: 4.2, price: 14000 },
                    { name: "Sup Labu", image: "soup.jpg", restaurant: "Bu Otang", rating: 4.7, price: 10000 },
                    { name: "Kopi Teman Sejiwa", image: "drink.jpg", restaurant: "Teman Sejiwa", rating: 4.7, price: 12000 },
                    { name: "Big Mac", image: "hamburger.jpg", restaurant: "MC Donalds", rating: 4.0, price: 32000 },
                    { name: "Cheese Bomb", image: "pizza.jpg", restaurant: "Pizza Hut", rating: 4.4, price: 24000 },
                    { name: "Salad Buah", image: "salad.jpg", restaurant: "Bu Otang", rating: 4.2, price: 14000 },
                    { name: "Sup Labu", image: "soup.jpg", restaurant: "Bu Otang", rating: 4.7, price: 10000 },
                ],
            }
        default:
            return state
    }
}

export default item