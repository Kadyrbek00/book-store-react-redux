const booksLoaded = (newBooks) => {
    return{
        type: "FETCH_BOOKS_SUCCESS",
        payload: newBooks,
    };
};

const booksRequested = () => {
    return{
        type: "FETCH_BOOKS_REQUEST",
    }
}

const booksError = (err) => {
    return{
        type: "",
        payload: err,
    }
}

const fetchBooks = (dispatch, bookService) => () => {
    dispatch(booksRequested())
            bookService
                .getBooks()
                .then((data) => dispatch(booksLoaded(data)))
                .catch((err) => dispatch(booksError(err)));
}

const addToCart = (bookId) => {
    return{
        type: "BOOKS_ADDED_TO_CART",
        payload: bookId
    }
}

const onIncrease = (bookId) => {
    return{
        type: "BOOKS_INCREASE_TO_CART",
        payload: bookId
    }
}

export {fetchBooks, addToCart, onIncrease}