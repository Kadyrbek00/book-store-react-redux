import updateBooklist from "./update-booklist";
import updateCartTable from "./update-cart-table";

const reducer = (state, action) => {
  return {
    booklist: updateBooklist(state, action),
    cartTable: updateCartTable(state, action),
  };
};

export default reducer;
