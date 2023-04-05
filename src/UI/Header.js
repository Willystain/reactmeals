import React from "react";

import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <div>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton onModalOpen={props.onModalOpen} />
      </header>
      <div className={classes.mainImage}>
        <img
          src={
            "https://raw.githubusercontent.com/academind/react-complete-guide-code/11-practice-food-order-app/extra-files/meals.jpg"
          }
          alt="Main banner"
        />
      </div>
    </div>
  );
};

export default Header;
