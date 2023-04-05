import React from "react";
import Card from "../UI/Card";
import MealItem from "./MealItem";

import classes from "./Meals.module.css";

const Meals = (props) => {
  return (
    <div className={classes.meals}>
      <Card>
        <ul>
          {props.meals.map((meal) => (
            <MealItem key={meal.id} meal={meal} />
          ))}
        </ul>
      </Card>
    </div>
  );
};

export default Meals;
