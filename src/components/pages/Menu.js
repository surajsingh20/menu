


import React, { useState, useEffect } from "react";

import "../../components/pages/tabledata.css";



function Menu() {

  const [data, getData] = useState([]);

  // const URL = "https://jsonplaceholder.typicode.com/posts";

  const URL ="https://mocki.io/v1/46bc0460-af93-43c2-8575-51f623ab26ec";



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
  
  const deleteitem =(dishId)=>
            {

            // alert(dishId);

            fetch(`https://mocki.io/v1/46bc0460-af93-43c2-8575-51f623ab26ec${dishId}`,
            {
            // method:`DELETE`
              method:`GET`
            }).then((response)=>{
                response.json().then(()=>
                {
                  console.warn(response)
                  fetchData() 
                })
            })

            }
  return (

    <>

    

     {/* <div class="footer1">

        <button type="submit" class="btn1" href="/">

          ADD{" "}

        </button>

      </div> */}



      {/* <h1>Recipe Items</h1> */}

      <table className="TT">

        <tr>

          <th>dish Id</th>

          <th>name </th>

          <th>cost </th>

          <th>type</th>

          <th>Delete </th>

        </tr>

        {data.map((item, i) => (

          <tr key={i}>

            <td>{item.dishId}</td>

            <td>{item.name}</td>

            <td>{item.cost}</td>

            <td>{item.type}</td>

            {/* <i class="fa fa-trash" aria-hidden="true"></i></td> */}
            <td> <button onClick={()=>deleteitem(item.dishId)}>delete</button> </td>
          </tr>

        ))}

      </table>
	  <div className='ADDBUTTON'>
		<a href="/AddMenu" className="Add">
        <button type="submit" className="btn btn--primary btn--medium">ADD ITEM</button>
         </a>
  
 		</div>

    </>

  );

}



export default Menu;








// import React, { useState } from "react";
// // import "../../App.css";
// import { Provider } from "../../Context";
// import Mains from "./Mains";
// import Total from "./Total";
// // import Footer from "../../components/Footer";
// import "../../styles.css";

// import { mains } from "../../menu";

// // import { Button } from "../../components/Button";
// // import { Link } from "react-router-dom";
// // import AddMenu from "./AddMenu";
// // import {mains} from "../../menu.json";

// export default function Menu({ dishId, name, type }) {
//   const [price, setPrice] = useState("");
//   return (
    
//     <>
//     <div>
//       <Provider>
//         <div className="menu">
//           <Mains meals={mains} />

//           {/* <Total /> */}

//         </div>
//       </Provider>

     
//       <h4 className="dishId">{dishId} </h4>
//       <h3 className="fname">{name} </h3>
//       <div className="type">
//         <p>{type} </p>
       
//       </div>
//       <br />
//       <p className="amount">
//         {""} {price}{" "}
//       </p>
     
      
//       {/* <button className="Add">
//         {" "}
//         <a href="/AddMenu"> ADD MENU </a>
//       </button> */}
       
       
//        <div className="addbutton">
//        <a href="/AddMenu" className="Add">
//         <button type="submit" className="btn btn--primary btn--medium">Add Menu</button>
//         </a>
//        </div>
      
//     </div>
    
//     {/* <Footer /> */}
//     </>
//   );
// }
// // //   constructor() {
// // //     super();
// // //     this.state = {
// // //       price: "",
// // //       quantity: 0
// // //     };
// // //   }

// // //   render() {
// // //     return (
// // //       <div>
// // //         <h3 className="fname">{this.props.name}</h3>
// // //         <div className="desc">
// // //           <p>{this.props.desc}</p>
// // //           {/* <button
// // //             className="btn"
// // //             value={this.props.price}
// // //             // onClick={() =>
// // //             //   this.props.action(
// // //             //     this.props.price,
// // //             //     this.props.name,
// // //             //     this.state.quantity
// // //             //   )
// // //             // }
// // //           >
// // //             Add
// // //           </button> */}

// // //         </div>
// // //         <br />

// // //       </div>
// // //     );
// // //   }
// // // }
// // expot default
