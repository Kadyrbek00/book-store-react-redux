import { connect } from "react-redux";
import {
  addToCart, removeAllBooksFromCart, removeBookFromCart
} from "../../actions";
import classes from "./styles.module.scss";

const ShoppingCartTable = ({
  items,
  total,
  onIncrease,
  onDecrease,
  onDelete,
  calculateTotal,
}) => {
 

  const renderRow = (item, idx) => {
    const { name, count, id, total } = item;
    return (
      <tr key={id}>
        <td>{idx + 1}</td>
        <td> {name} </td>
        <td>{count}</td>
        <td>${total}</td>
        <td>
          <button
            onClick={() => onDelete(id)}
            className="btn btn-outline-danger btn-sm"
          >
            <i className="fa fa-trash" />
          </button>

          <button
            onClick={() => onIncrease(id)}
            className="btn btn-outline-success btn-sm"
          >
            <i className="fa fa-plus-circle" />
          </button>

          <button
            onClick={() => onDecrease(id)}
            className="btn btn-outline-warning btn-sm"
          >
            <i className="fa fa-minus-circle" />
          </button>
        </td>
      </tr>
    );
  };

  return (
    <div className={classes.shopping_cart_table}>
      <h2>Your Order</h2>

      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Item</th>
            <th>Count</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {items.map((item, idx) => {
            return renderRow(item, idx);
          })}
        </tbody>
      </table>

      <div className={classes.shopping_cart_table_total}>Total: ${total}</div>
    </div>
  );
};

const mapStateToProps = ({ cartTable: { cartItems, orderTotal } }) => {
  return {
    items: cartItems,
    total: orderTotal,
  };
};

const mapDispatchToProps = {
  onIncrease: addToCart,
  onDelete: removeAllBooksFromCart,
  onDecrease: removeBookFromCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCartTable);
