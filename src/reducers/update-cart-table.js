const updateItems = (idx, item, cartItems) => {
  if (item.count === 0) {
    return [...cartItems.slice(0, idx), ...cartItems.slice(idx + 1)];
  }

  if (idx < 0) {
    return [...cartItems, item];
  }
  return [...cartItems.slice(0, idx), item, ...cartItems.slice(idx + 1)];
};

const updateItem = (item = {}, book, quantity) => {
  const { id = book.id, total = 0, count = 0, name = book.title } = item;

  return {
    id,
    name,
    count: count + quantity,
    total: book.price * quantity + total,
  };
};

const updateOrder = (state, bookId, quantity) => {
  const {
    booklist: { books },
    cartTable: { cartItems },
  } = state;

  const book = books.find((book) => book.id === bookId);
  const bookIndex = cartItems.findIndex(({ id }) => id === bookId);
  const item = cartItems[bookIndex];

  let newItem = updateItem(item, book, quantity);
  let items = updateItems(bookIndex, newItem, cartItems);
  let resultTotal = 0;
  for (let key in items) {
    resultTotal += items[key].total;
  }

  return {
    orderTotal: resultTotal,
    cartItems: items,
  };
};

const updateCartTable = (state, action) => {
  if (state === undefined) {
    return {
      cartItems: [],
      orderTotal: 0,
    };
  }

  switch (action.type) {
    case "BOOKS_ADDED_TO_CART":
      return updateOrder(state, action.payload, 1);

    case "REMOVE_BOOK_FROM_CART":
      return updateOrder(state, action.payload, -1);

    case "REMOVE_ALL_BOOKS_FROM_CART":
      const item = state.cartTable.cartItems.find(
        (item) => item.id === action.payload
      );
      return updateOrder(state, action.payload, -item.count);

    default:
      return state.cartTable;
  }
};

export default updateCartTable;
