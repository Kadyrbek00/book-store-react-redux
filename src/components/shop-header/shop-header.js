import React from "react"
import {Link} from "react-router-dom"
import classes from "./styles.module.scss"

const ShopHeader = ({numItems, total}) => {

    const iconclass = " fas fa-shopping-cart"

    return(
        <header className={classes.shop_header}>
            <Link className={classes.logo + " logo text-dark"} to="/"> ReStore</Link>

            <Link to={"/cart"} className={classes.shopping_cart}>
                <i className={classes.cart_icon + iconclass}/>
                {numItems} items (${total})
            </Link>
        </header>
    )
}

export default ShopHeader