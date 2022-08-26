import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";

function Cards() {
  return (
    <div className="cards">
      <h1>Check out these EPIC Foods!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/samoosa.jpg"
              text="Winner winner Samosa dinner."
              label="Samosa"
              path="/Menu"
            />
            <CardItem
              src="images/pizza.jpg"
              text="The party cant start without pizza"
              label="Pizza"
              path="/Menu"
            />
            <CardItem
              src="images/chilichicken.jpg"
              text="Take a bite out of hunger."
              label="Chili Chicken"
              path="/Menu"
            />
          </ul>
          {/* <ul className="cards__items">
            {/* <CardItem
              src="images/nonveg.jpg"
              text="Its finger lickin good."
              label="Non-Veg"
              path="/Menu"
            />
            <CardItem
              src="images/paneer.jpg"
              text="You know when its real."
              label="Veg"
              path="/Menu"
            /> */}
          {/* <CardItem
              src="images/thali.jpg"
              text="Take a bite out of hunger."
              label="Chili Chicken"
              path="/Menu"
            />
            </ul> */}
        </div>
      </div>
    </div>
  );
}

export default Cards;
