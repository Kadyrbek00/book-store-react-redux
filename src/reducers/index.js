const initialState = {
    books: [],
    loading: true,
    error: null,
    cartItem: [],
    orderTotal: 520
}

const uploadItems = (idx, item, cartItem) => {
    if (idx < 0) {
        return [...cartItem, item];
    }
    return [...cartItem.slice(0, idx), item, ...cartItem.slice(idx + 1)]
}

const uploadItem = (item = {}, book) => {
    const { id = book.id, total = 0, count = 0, name = book.title } = item;

    return {
        id,
        name,
        count: count + 1,
        total: book.price + total,
    }
}

const reducer = (state = initialState, action) => {
    // if(action.type === "BOOKS_LOADED"){
    //     return {
    //         books: action.payload,
    //     };
    // }
    //     else{
    //         return state
    //     }

    switch (action.type) {

        case "FETCH_BOOKS_REQUEST":
            return {
                ...state,
                books: [],
                loading: true,
                error: null
            }

        case "FETCH_BOOKS_SUCCESS":
            return {
                ...state,
                books: action.payload,
                loading: false,
                error: null,
            };

        case "FETCH_BOOKS_FAILUIARE":
            return {
                ...state,
                books: [],
                loading: false,
                error: action.payload,
            }

        case "BOOKS_ADDED_TO_CART":
            const bookId = action.payload;
            const book = state.books.find((book) => book.id === bookId);
            const bookIndex = state.cartItem.findIndex(({ id }) => id === bookId);
            const item = state.cartItem[bookIndex];

            let newItem = uploadItem(item, book);

            return {
                ...state,
                cartItem: uploadItems(bookIndex, newItem, state.cartItem)
            }

            case "BOOKS_INCREASE_TO_CART":
                return {
                    ...state,
                    cartItem: uploadItems(bookIndex, newItem, state.cartItem)
                }


        default:
            return state;
    }
}


export default reducer