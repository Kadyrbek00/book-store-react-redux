import BookListContainer from "../books-list/books-list";
import ShoppingCartTable from "../shopping-cart-table";

const HomePage = () => {
  return (
    <div>
      <BookListContainer />

      <ShoppingCartTable />
    </div>
  );
};

export default HomePage;
