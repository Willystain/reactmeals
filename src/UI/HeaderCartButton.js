import React, { useContext } from "react";
import CartContext from "../store/cart-context";
import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
  const ctxCart = useContext(CartContext);
  return (
    <button className={classes.button} onClick={props.onModalOpen}>
      <span className={classes.icon}>
        <i className="fas fa-shopping-cart"></i>
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{ctxCart.items.length}</span>
    </button>
  );
};

export default HeaderCartButton;
