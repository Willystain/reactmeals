import React, { useContext, useState } from "react";
import CartContext from "../store/cart-context";
import Input from "../UI/Input";
import classes from "./MealForm.module.css";

const MealForm = (props) => {
  const [amount, setAmount] = useState(1);
  const ctxCart = useContext(CartContext);

  const submintHandler = (event) => {
    event.preventDefault();

    const item = {
      ...props.meal,
      amount: +amount,
    };

    ctxCart.addItem(item);
  };

  const inputChangeHandler = (event) => {
    setAmount(event.target.value);
  };

  return (
    <form className={classes.form} onSubmit={submintHandler}>
      <Input
        label="Amount"
        input={{
          id: "amount",
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
        onChange={inputChangeHandler}
      />
      <button className={classes["button--add"]} type="submit">
        + Add
      </button>
    </form>
  );
};

export default MealForm;
