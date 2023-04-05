import React from "react";

import classes from "./Summary.module.css";

const Summary = (props) => {
  return (
    <div className={classes.summary}>
      <h2>Delicious Food Delivered to you</h2>
      <p>
        Choose your favorite meal from our selection of available meals and
        enjoy a delicious lunch or meal
      </p>
      <p>
        All our meals are cooked with high-quality ingridients, just-in-time adn
        of course by experienced chefs!
      </p>
    </div>
  );
};

export default Summary;
