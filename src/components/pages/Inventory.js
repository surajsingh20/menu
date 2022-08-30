
import React, { useState, useEffect } from "react";
import "../../components/pages/inventoryTable.css";

function Inventory() {
  const [data, getData] = useState([]);
  // const URL = "https://jsonplaceholder.typicode.com/posts";
  const URL ="https://mocki.io/v1/fdbdada0-edaf-4e31-a14e-5c6b839a8c59";
  
  // useEffect(() => {
  //   fetchData();
  // }, []);

  // const fetchData = () => {
  //   fetch(URL)
  //     .then((res) => res.json())

  //     .then((response) => {
  //       console.log(response);
  //       getData(response);
  //     });
  // };
//   return (
//     <>
    
//      {/* <div class="footer1">
//         <button type="submit" class="btn1" href="/">
//           ADD{" "}
//         </button>
//       </div> */} 

//       <h1>Inventory Items</h1>
//       <table className="inventory">
//         <tr>
//           <th>User Id</th>
//           <th>Id</th>
//           <th>Title</th>
//           <th>Description</th>
//         </tr>
//         {data.map((item, i) => (
//           <tr key={i}>
//             <td>{item.userId}</td>
//             <td>{item.id}</td>
//             <td>{item.title}</td>
//             <td>{item.body}</td>
//           </tr>
//         ))}
//       </table>
//     </>
//   );
// }

//  export default Inventory;


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
    
     {/* <div class="footer1">
        <button type="submit" class="btn1" href="/">
          ADD{" "}
        </button>
      </div> */} 

      <h2>Inventory Items</h2>
      <table className="inventory">
        <tr>
          <th>User Id</th>
          <th>Id</th>
          <th>Title</th>
          <th>Description</th>
        </tr>
        {data.map((item, i) => (
          <tr key={i}>
            <td>{item.dishId}</td>
            <td>{item.name}</td>
            <td>{item.cost}</td>
            <td>{item.type}</td>
          </tr>
        ))}
      </table>
    </>
  );
}

 export default Inventory;

