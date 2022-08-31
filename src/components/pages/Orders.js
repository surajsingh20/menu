import React, { useState } from "react";
// import "../../App.css";
import { Provider } from "../../Context";
import Mains from "./Mains";
import Total from "./Total";
import Footer from "../../components/Footer";
import "../../styles.css";
import { mains } from "../../menu";
// import { Button } from "../../components/Button";
// import { Link } from "react-router-dom";
// import AddMenu from "./AddMenu";
// import {mains} from "../../menu.json";
export default function Menu({ dishId, name, type }) {
  const [price, setPrice] = useState("");
  return (
    <div>
      <Provider>
      
      <h1>  Order Status</h1>
        <div className="menu">
       <Mains meals={mains} />

          <Total />
        </div>
      </Provider>
     
      {/* <h4 className="dishId">{dishId} </h4>
      <h3 className="fname">{name} </h3>
      <div className="type">
        <p>{type} </p>
      </div>
      <br />
      <p className="amount">
        {""} {price}{" "}
      </p> */}

     

      {/* <Footer /> */}
    </div>
  );
}
