import React from "react";
import Input from "./Input.js";

export default function Mains({ meals }) {
  return (
    <section className="mains">
      {meals.map((meal, index) => (
        <article className="menu-item" key={index}>
          <h3 className="mains-dishId">{meal.dishId} </h3>
          <h3 className="mains-name">{meal.name}</h3>
          <Input type="mains" name={meal.name} index={index} />
          <strong className="mains-price">Rs. {meal.price}</strong>
          <p className="mains-description">{meal.description}</p>
        </article>
      ))}
    </section>
  );
}
