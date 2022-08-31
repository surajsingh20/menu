// import React, { useState } from "react";
// // import "../../App.css";
// import { Provider } from "../../Context";
// import Mains from "./Mains";
// import Total from "./Total";
// import Footer from "../../components/Footer";
// import "../../styles.css";
// import { mains } from "../../menu";
// // import { Button } from "../../components/Button";
// // import { Link } from "react-router-dom";
// // import AddMenu from "./AddMenu";
// // import {mains} from "../../menu.json";
// export default function Menu({ dishId, name, type }) {
//   const [price, setPrice] = useState("");
//   return (
//     <div>
//       <Provider>
      
//       <h1>  Order Status</h1>
//         <div className="menu">
//        <Mains meals={mains} />

//           <Total />
//         </div>
//       </Provider>
     
//       {/* <h4 className="dishId">{dishId} </h4>
//       <h3 className="fname">{name} </h3>
//       <div className="type">
//         <p>{type} </p>
//       </div>
//       <br />
//       <p className="amount">
//         {""} {price}{" "}
//       </p> */}

     

//       {/* <Footer /> */}
//     </div>
//   );
// }


import React, { useState, useEffect } from "react";

import "../../components/pages/tabledata.css";



function Orders() {

  const [data, getData] = useState([]);

  // const URL = "https://jsonplaceholder.typicode.com/posts";

  const URL ="https://mocki.io/v1/b10d41eb-baee-41b5-97cf-fb91929b1eb1";



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

    <>

  

      <table className="TT">

        <tr>

          <th>Order Id</th>

          <th>Table No</th>

          <th>dish Id</th>

          <th>Status</th>
          
          <th>Special Request</th>
        </tr>

        {data.map((item, i) => (

          <tr key={i}>

            <td>{item.OrderId}</td>

            <td>{item.tableNo}</td>

            <td>{item.dishId}</td>

            <td>{item.status}</td>

            <td>{item.specialRequest}</td>
          </tr>

        ))}

      </table>
	  {/* <div className='ADDBUTTON'>
		<a href="/AddMenu" className="Add">
        <button type="submit" className="btn btn--primary btn--medium">ADD ITEM</button>
         </a>
  
 		</div> */}

    </>

  );

}



export default Orders;
