import { useContext, useEffect, useState } from "react";
import CartContext from "../../store/cart-context";
import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css"
const HeaderCartButton = ({ onClick }) => {
    const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
    const cartCtx = useContext(CartContext);
    const numberofItems = cartCtx.items.reduce((curNumber, item) => { return curNumber + item.amount }, 0)
    const buttonClasses = `${classes.button} ${btnIsHighlighted ? classes.bump : ''}`
    const { items } = cartCtx;
    useEffect(() => {
        if (items.length === 0) {
            return;
        }
        setBtnIsHighlighted(true)
        const timer = setTimeout(() => {
            setBtnIsHighlighted(false)
        }, 300);
        return () => {
            clearTimeout(timer)
        }
    }, [items])
    return (
        <button className={buttonClasses} onClick={onClick}>
            <span className={classes.icon}>
                <CartIcon />
            </span>
            <span>Your Cart</span>
            <span className={classes.badge}>{numberofItems}</span>
        </button>
    );
}

export default HeaderCartButton;
