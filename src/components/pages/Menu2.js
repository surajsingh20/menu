import React, { useState } from "react";
// import "../../App.css";
import { Provider } from "../../Context";
import Mains from "./Mains";
import Total from "./Total";
// import Footer from "../../components/Footer";
import "../../styles.css";
import { mains } from "../../menu";
// import { Button } from "../../components/Button";
// import { Link } from "react-router-dom";
// import AddMenu from "./AddMenu";
// import {mains} from "../../menu.json";

export default function Menu2({ dishId, name, type }) {
  const [price, setPrice] = useState("");
  return (
    <div>
      <Provider>
        <div className="menu">
          <Mains meals={mains} />

          <Total />
       
        </div>
       
       {/* <>
        <button className="Add">
        {""}
        <a href="/Orders" >
        <Total />
        Confirm Order </a>
        </button>
       </>  */}
         
            <a href="/Orders">
                <button className="btn btn--primary btn--medium"> <Total/> Confirm order</button>
              </a>

      </Provider>


      <h4 className="dishId">{dishId} </h4>
      <h3 className="fname">{name} </h3>
      <div className="type">
        <p>{type} </p>
      </div>
      <br /> 
      <p className="amount">
        {""} {price}{" "}
      </p>

      {/* <button className="Add">
        {" "}
        <a href="/AddMenu"> ADD ITEM </a>
      </button> */}

      {/* <Footer /> */}
    </div>
  );
}
// //   constructor() {
// //     super();
// //     this.state = {
// //       price: "",
// //       quantity: 0
// //     };
// //   }

// //   render() {
// //     return (
// //       <div>
// //         <h3 className="fname">{this.props.name}</h3>
// //         <div className="desc">
// //           <p>{this.props.desc}</p>
// //           {/* <button
// //             className="btn"
// //             value={this.props.price}
// //             // onClick={() =>
// //             //   this.props.action(
// //             //     this.props.price,
// //             //     this.props.name,
// //             //     this.state.quantity
// //             //   )
// //             // }
// //           >
// //             Add
// //           </button> */}

// //         </div>
// //         <br />

// //       </div>
// //     );
// //   }
// // }
// expot default
