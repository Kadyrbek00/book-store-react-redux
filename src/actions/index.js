const booksLoaded = (newBooks) => {
  return {
    type: "FETCH_BOOKS_SUCCESS",
    payload: newBooks,
  };
};

const booksRequested = () => {
  return {
    type: "FETCH_BOOKS_REQUEST",
  };
};

const booksError = (err) => {
  return {
    type: "FETCH_BOOKS_FAILUIRE",
    payload: err,
  };
};

const fetchBooks = (dispatch, bookService) => () => {
  dispatch(booksRequested());
  bookService
    .getBooks()
    .then((data) => dispatch(booksLoaded(data)))
    .catch((err) => dispatch(booksError(err)));
};

const addToCart = (bookId) => {
  return {
    type: "BOOKS_ADDED_TO_CART",
    payload: bookId,
  };
};

const removeBookFromCart = (bookId) => {
  return {
    type: "REMOVE_BOOK_FROM_CART",
    payload: bookId,
  };
};

const removeAllBooksFromCart = (bookId) => {
  return {
    type: "REMOVE_ALL_BOOKS_FROM_CART",
    payload: bookId,
  };
};

const calculateTotal = () => {
  return {
    type: "CALCULATE_TOTAL",
  };
};

export { fetchBooks, addToCart, removeBookFromCart, removeAllBooksFromCart, calculateTotal };
