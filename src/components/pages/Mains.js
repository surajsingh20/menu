import React from "react";
import Input from "./Input.js";
import { useEffect } from "react";
import { useState } from "react";

export default function Mains() {

  const [data, getData] = useState([]);
 
  const URL ="https://mocki.io/v1/fdbdada0-edaf-4e31-a14e-5c6b839a8c59";

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    fetch(URL)
      .then((res) => res.json())

      .then((response) => {
        console.log(response);
        getData(response);

      });
  };

  return (
    <section className="mains">
      {data.map((meal, index) => (
        <article className="menu-item" key={index}>
          <h3 className="mains-dishId">{meal.dishId} </h3>
          <h3 className="mains-name">{meal.name}</h3>
          <Input type="mains" name={meal.name} index={index} />
          <strong className="mains-price">Rs. {meal.cost}</strong>
 
          <p className="mains-description">{meal.type}</p>
        </article>
      ))}
    </section>
  );
}
