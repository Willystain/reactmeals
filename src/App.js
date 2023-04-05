import React, { useState } from "react";
import Header from "./UI/Header";
import Summary from "./MealSummary/Summary";
import Meals from "./Meals/Meals";
import Cart from "./Cart/Cart";
import CartProvider from "./store/CartProvider";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const DUMMY_MEALS = [
    {
      id: "m1",
      name: "Sushi",
      description: "Finest fish and veggies",
      price: 22.99,
    },
    {
      id: "m2",
      name: "Schnitzel",
      description: "A german specialty!",
      price: 16.5,
    },
    {
      id: "m3",
      name: "Barbecue Burger",
      description: "American, raw, meaty",
      price: 12.99,
    },
    {
      id: "m4",
      name: "Green Bowl",
      description: "Healthy...and green...",
      price: 18.99,
    },
  ];

  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <CartProvider>
      {isModalOpen && <Cart closeModal={closeModal} />}
      <div>
        <Header onModalOpen={openModal} />
      </div>
      <Summary></Summary>
      <Meals meals={DUMMY_MEALS} />
    </CartProvider>
  );
}

export default App;
