import React, { useContext } from "react";
import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import CartContext from "../store/cart-context";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  const totalAmount = cartCtx.totalAmount.toFixed(2);

  const removeItemHandler = (event, id) => {
    event.stopPropagation();
    cartCtx.removeItem(id);
  };

  const cartItems = (
    <ul className={classes["cart-item"]}>
      {cartCtx.items.map((item) => (
        <li key={item.id} className={classes["cart-item-li"]}>
          {item.name} - {item.price} x {item.amount}
          <button
            className={classes["button--remove"]}
            onClick={(event) => removeItemHandler(event, item.id)}
          >
            Remove
          </button>
        </li>
      ))}
    </ul>
  );

  return (
    <Modal onClose={props.closeModal}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.closeModal}>
          Close
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
