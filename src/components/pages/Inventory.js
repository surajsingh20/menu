import React, { useState, useEffect } from "react";
import "./tabledata.css";

function Inventory() {
  const [data, getData] = useState([]);
  const URL = "https://jsonplaceholder.typicode.com/posts";

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
      <h1>How to display JSON data to table in React JS</h1>
      <tbody>
        <tr>
          <th>User Id</th>
          <th>Id</th>
          <th>Title</th>
          <th>Description</th>
        </tr>
        {data.map((item, i) => (
          <tr key={i}>
            <td>{item.userId}</td>
            <td>{item.id}</td>
            <td>{item.title}</td>
            <td>{item.body}</td>
          </tr>
        ))}
      </tbody>
    </>
  );
}

 export default Inventory;

// import React from 'react'
// import InventoryData from "../../InventoryData.json" 
// function Inventory(){
// 	const Display= InventoryData.map(
// 		(key)=>{
// 			return(
// 				<tr>
// 					<td>{key.ingredients}</td>
 				
//  					<td>{key.Itemss}</td>
//                   <td>{key.Units}</td>
// 				</tr>
// 			)
// 		}
// 	)

// 	return(
// 		<div>
// 			<table >
// 				<thead>
// 					<tr>
// 					<th>Ingredient</th>
// 				<th>Itemss</th>
 				
//                      <th>Unit</th>
// 					</tr>
// 				</thead>
// 				<tbody>
				
					
// 					{Display}
					
// 				</tbody>
// 			</table>
			
// 		</div>
// 	)
// }

// export default Inventory;

