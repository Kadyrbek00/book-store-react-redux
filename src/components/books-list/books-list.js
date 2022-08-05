import { useEffect } from "react";
import { connect } from "react-redux";
import { fetchBooks, addToCart } from "../../actions";
import ErrorIndicator from "../error-indicator";
import { WithConsumer } from "../hoc";
import { compose } from "./../../utils";
import Spinner from "./../spinner";
import BookListItem from "./book-list-item";
import classes from "./book-list.module.scss";

const BookList = ({books, addToCart}) => {
  return (
    <ul className={classes.book_list}>
      {books.map((book) => {
        return (
          <li key={book.id}>
            <BookListItem addToCart={() => addToCart(book.id)} book={book} />
          </li>
        );
      })}
    </ul>
  );
}

const BookListContainer = ({ loading, error, books, fetchBooks, addToCart }) => {
  useEffect(() => {
    fetchBooks();
  }, []);

  if (loading) {
    return <Spinner />;
  }

  if (error) {
    return <ErrorIndicator />;
  }

  return <BookList addToCart={addToCart} books={books} />
};

const mapStateToProps = ({booklist: { books, loading, error }}) => {
  return {
    books,
    loading,
    error,
  };
};

const mapDispatchToProps = (dispatch, { bookService }) => {
  return {
    fetchBooks: fetchBooks(dispatch, bookService),
    addToCart: (id) => dispatch(addToCart(id)),
  };
};

// const mapDispatchToProps = (dispatch) => {
//   return bindActionCreators({
//     booksLoaded
//   }, dispatch)
// };

export default compose(
  WithConsumer(),
  connect(mapStateToProps, mapDispatchToProps)
)(BookListContainer);
