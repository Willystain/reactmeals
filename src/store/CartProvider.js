import React, { useState } from "react";
import CartContext from "./cart-context";

const CartProvider = (props) => {
  //beleza esse é o nosso cartprovider...
  //começamos declarando os states de items e total amount
  const [items, setItems] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);

  //aqui criamos a func que vai ser responsável por adicionar os items a lista de items

  const addItemToCart = (item) => {
    setItems((prevState) => {
      let itemFound = false;
      const updatedItems = prevState.map((existingItem) => {
        if (existingItem.id === item.id) {
          itemFound = true;
          return {
            ...existingItem,
            amount: existingItem.amount + item.amount,
          };
        }
        return existingItem;
      });

      if (!itemFound) {
        updatedItems.push({
          id: item.id,
          name: item.name,
          price: item.price,
          amount: item.amount,
        });
      }
      // Atualizando o totalAmount
      setTotalAmount((prevState) => prevState + item.price * item.amount);

      return updatedItems;
    });
  };

  const removeItem = (id) => {
    setItems((prevState) => {
      const updatedItems = prevState
        .map((item) => {
          if (item.id === id) {
            // Decrease the item amount by 1
            const updatedAmount = item.amount - 1;

            // Remove the item if its amount is 0
            if (updatedAmount === 0) {
              setTotalAmount(
                (prevState) => prevState - item.price * item.amount
              );
              return null;
            } else {
              setTotalAmount((prevState) => prevState - item.price);
              return {
                ...item,
                amount: updatedAmount,
              };
            }
          }
          return item;
        })
        .filter((item) => item !== null);

      return updatedItems;
    });
  };

  const cartContext = {
    items: items,
    totalAmount: totalAmount,
    addItem: addItemToCart,
    removeItem: removeItem,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
