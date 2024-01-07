import { Fragment, useContext, useState } from "react";
import CartContext from "../../store/cart-context";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css"
import CartItem from "./CartItem";
import Checkout from "./Checkout";

const Cart = ({ onHide }) => {
    const [isCheckout, setIsCheckout] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [didSubmit, setDidSubmit] = useState(false);
    const cartCtx = useContext(CartContext);
    const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`
    const hasItems = cartCtx.items.length > 0;
    const cartItemsRemoveHandler = (id) => {
        cartCtx.removeItem(id)
    }
    const cartItemsAddHandler = (item) => {
        cartCtx.addItem({ ...item, amount: 1 })
    }
    const cartItems = <ul className={classes['cart-items']}>
        {cartCtx.items.map(item =>
            <CartItem key={item.id}
                onRemove={cartItemsRemoveHandler.bind(null, item.id)} onAdd={cartItemsAddHandler.bind(null, item)} {...item} />)}
    </ul>

    const orderHandler = () => {
        setIsCheckout(true)
    }

    const sumbitOrderHandler = async (userData) => {
        setIsSubmitting(true);
        await fetch("https://react-food-app-bcfae-default-rtdb.asia-southeast1.firebasedatabase.app/orders.json", {
            method: 'POST',
            body: JSON.stringify({
                user: userData,
                orderItems: cartCtx.items
            })
        })
        setIsSubmitting(false)
        setDidSubmit(true)
        cartCtx.clearCart();
    }

    const modalActions = <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={onHide}>Close</button>
        {hasItems && <button className={classes.button} onClick={orderHandler}>Order</button>}
    </div>

    const cartModalContent = <Fragment>
        {cartItems}
        <div className={classes.total}>
            <span>Total Amount</span><span>{totalAmount}</span>
        </div>
        {isCheckout && <Checkout onConfirm={sumbitOrderHandler} onCancel={onHide} />}
        {!isCheckout && modalActions}
    </Fragment>
    const isSubmittingModalContent = <p>Sending order data...</p>;
    const didSubmitModalContent = (
        <Fragment>
            <p>Successfully sent the order!</p>
            <div className={classes.actions}>
                <button className={classes.button} onClick={onHide}>
                    Close
                </button>
            </div>
        </Fragment>
    );

    return (
        <Modal onClose={onHide}>
            {!isSubmitting && !didSubmit && cartModalContent}
            {isSubmitting && isSubmittingModalContent}
            {!isSubmitting && didSubmit && didSubmitModalContent}
        </Modal>
    );
}

export default Cart;
