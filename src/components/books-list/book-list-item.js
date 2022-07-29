import classes from "./book-list.module.scss"


const BookListItem = ({ book, addToCart }) => {
    const { title, author, price, coverImage } = book;

    return (
        <div className={classes.book_list_item}>
            <div className={classes.book_cover}>
                <img src={coverImage} alt="cover"/>
            </div>
            <div className={classes.book_details}>
                <span className={classes.book_title}>{title}</span>
                <div className={classes.book_author}>{author}</div>
                <div className={classes.book_price}>  ${price}</div>

                <button onClick={addToCart} className="btn btn-info">Add to cart</button>
            </div>
        </div>
    )
}

export default BookListItem;