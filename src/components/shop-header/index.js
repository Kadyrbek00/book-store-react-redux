import React from "react";
import { Link } from "react-router-dom";
import classes from "./styles.module.scss";

const ShopHeader = ({ numItems, total }) => {
  let iconClass = " fas fa-shopping-cart";
  return (
    <header className={classes.shop_header}>
      <Link className={classes.logo + " text-dark"} to="/" >
        ReStore
      </Link>

      <Link to={"/cart"} className={classes.shopping_cart}>
        <i className={classes.cart_icon + iconClass} />
        {numItems} items (${total})
      </Link>
    </header>
  );
};

export default ShopHeader;
