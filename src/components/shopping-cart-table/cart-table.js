import { connect } from "react-redux"
import classes from "./table.module.scss"

const ShoppingCartTable = (
    { items,
        total,
        onIncrease,
        onDecrease,
        onDelete }
) => {
    const renderRow = (item, idx) => {
        const { name, count, id, total } = item;
        return (
                <tr key={id }>
                    <td>{idx + 1}</td>
                    <td>{name}</td>
                    <td>{count}</td>
                    <td>${total}</td>
                    <td>
                        <button onClick={() => onDelete(id)} className="btn btn-outline-danger btn-sm">
                            <i className="fa fa-trash" />
                        </button>
                        <button onClick={() => onIncrease(id)} className="btn btn-outline-success btn-sm">
                            <i className="fa fa-plus-circle" />
                        </button>
                        <button onClick={() => onDecrease(id)} className="btn btn-outline-warning btn-sm">
                            <i className="fa fa-minus-circle" />
                        </button>
                    </td>
                </tr>
        )
    }
    return (
        <div className={classes.shopping_cart_table}>
            <h2>
                Your Order
            </h2>
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
                        return renderRow(item, idx)
                    }
                    )}
                </tbody>

            </table>



            <div className={classes.shopping_cart_table_total}>
                Total: ${total}
            </div>
        </div>
    )
}

const mapStateToProps = ({ cartItem, orderTotal }) => {
    return {
        items: cartItem,
        total: orderTotal
    }
}

const mapDispatchToprops = () => {
    return{
        onIncrease: (id) => {
            console.log("onIncrease", id);
        },
        onDecrease: (id) => {
            console.log("onDecrease", id);
        },
        onDelete: (id) => {
            console.log("onDelete", id);
        },
    }
}

export default connect(mapStateToProps, mapDispatchToprops)(ShoppingCartTable)