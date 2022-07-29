import BookListContainer from "../books-list/book-list";
import ShoppingCartTable from "../shopping-cart-table/cart-table";

export default function HomePage() {

    return (
        <>
            <BookListContainer/>

            <ShoppingCartTable/>
        </>
    )
}