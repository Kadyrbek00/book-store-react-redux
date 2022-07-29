import BookListItem from "./book-list-item"
import classes from "./book-list.module.scss"
import { connect } from "react-redux";
import { WithConsumer } from "../hoc";
import { useEffect } from "react";
import compose from "../../utils/compose";
import Spinner from "../spinner/spinner";
import ErrorIndicator from "../error-indicator/error-indicatur";
import { fetchBooks, addToCart } from "../../actions";

const BookList = ({ books, addToCart }) => {


    return (
        <ul className={classes.book_list}>
            {books.map((book) => {
                return (
                    <li key={book.id}><BookListItem addToCart={() => addToCart(book.id)} book={book} /></li>
                )
            })}
        </ul>
    )
}

const BookListContainer = ({ error, loading, books, fetchBooks, addToCart }) => {

    useEffect(() => {
        fetchBooks()
    }, [])

    if (loading) {
        return <Spinner />
    }

    if (error) {
        return <ErrorIndicator />
    }

    return <BookList addToCart={addToCart} books={books} />

}

const mapStateToProps = ({ books, loading, error }) => {
    return {
        books,
        loading,
        error,
    }
};

const mapDispatchToProps = (dispatch, { bookService }) => {
    return {
        fetchBooks: fetchBooks(dispatch, bookService),
        addToCart: (id) => dispatch(addToCart(id))
    }
}

// const mapDispatchToProps = (dispatch) => {
//     return bindActionCreators({
//         booksLoaded
//     }, dispatch)
// }


export default compose(
    WithConsumer(),
    connect(mapStateToProps, mapDispatchToProps)
)(BookListContainer)

// export default WithConsumer()(connect(mapStateToProps, mapDispatchToProps)(BookList));