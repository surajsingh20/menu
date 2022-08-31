
// import React, { useState, useEffect } from "react";
// import "../../components/pages/inventoryTable.css";

// function newRecipe() {

//   const [dota, getDota] = useState([]);
//   // const URL = "https://jsonplaceholder.typicode.com/posts";
//  // const URL ="https://mocki.io/v1/fdbdada0-edaf-4e31-a14e-5c6b839a8c59";
//   const URL2 ="https://mocki.io/v1/2eb3bf42-68fd-4d06-b708-06f45a085a4c";
  


//   useEffect(() => {
//     fetchDota();
//   }, []);

//   const fetchDota = () => {
//     fetch(URL2)
//       .then((res) => res.json())

//       .then((response) => {
//         console.log(response);
//         getDota(response);

//       });
//   };
//   return (
//     <>
    
//      {/* <div class="footer1">
//         <button type="submit" class="btn1" href="/">
//           ADD{" "}
//         </button>
//       </div> */} 
          
//       <h2>Inventory Items</h2>
//       <table className="TT">
//         <tr>
//           <th>Id</th>
//           <th>dish Id</th>
//           <th>items</th>
//           <th>units</th>
//         </tr>
//         {dota.map((item, i) => (
//           <tr key={i}>
//             {/* <td>{item.dishId}</td>
//             <td>{item.name}</td>
//             <td>{item.cost}</td>
//             <td>{item.type}</td> */}
//             <td>{item.ingredientId}</td>
//            <td>{item.dishId}</td>
//            <td>{item.Item}</td>
//             <td>{item.dishUnit}</td>
//           </tr>
//         ))}
//       </table>
//     </>
//   );
// }

//  export default newRecipe;































// // import React, { useState, useEffect } from "react";
// // import "../../components/pages/tabledata.css";

// // function newRecipe() {
// //   const [dota, setDota] = useState([]);
// //   // const URL = "https://jsonplaceholder.typicode.com/posts";
// //   const URL2 ="https://mocki.io/v1/2eb3bf42-68fd-4d06-b708-06f45a085a4c";
  
  


// //   useEffect(() => {
// //     fetchData();
// //   }, []);

// //   const fetchData = () => {
// //     fetch(URL2)
// //       .then((res) => res.json())

// //       .then((response) => {
// //         console.log(response);
// //         setDota(response);

// //       });
// //   };
// //   return (
// //     <>
    
// //      {/* <div class="footer1">
// //         <button type="submit" class="btn1" href="/">
// //           ADD{" "}
// //         </button>
// //       </div> */} 

// //       <h2>Inventory Items</h2>
// //       <table className="inventory">
// //         <tr>
// //           <th>User Id</th>
// //           <th>Id</th>
// //           <th>Title</th>
// //           <th>Description</th>
// //         </tr>
// //         {dota.map((item, i) => (
// //           <tr key={i}>
// //             <td>{item.ingredientId}</td>
// //            <td>{item.dishId}</td>
// //            <td>{item.Item}</td>
// //             <td>{item.dishUnit}</td>
// //           </tr>
// //         ))}
// //       </table>
// //     </>
// //   );
// // }

// //  export default newRecipe;









// // // import React, { useState, useEffect } from "react";
// // // import "../../components/pages/tabledata.css";

// // // function newRecipe() {

// // //   const [items, setItems] = useState([]);
// // //   const url ="https://mocki.io/v1/2eb3bf42-68fd-4d06-b708-06f45a085a4c";
  
// // //   useEffect(() => {
// // //     fetchItems();
// // //   } ,[]);

// // //   const fetchItems = () => {
// // //     fetch(url)
// // //       .then((res) => res.json())

// // //       .then((response) => {
// // //         console.log(response);
// // //         setItems(response);

// // //       });
// // //   };

// // //   return (
// // //     <>
// // //       <h2>Inventory Items</h2>
// // //       <table className="TT">
// // //         <tr>
// // //           <th> Ingredient Id</th>
// // //           <th>Dish Id</th>
// // //           <th>Items</th>
// // //           <th>Dish Units</th>
// // //         </tr>
// // //         {items.map((index, i) => (
// // //           <tr key={i}>
// // //             <td>{index.ingredientId}</td>
// // //             <td>{index.dishId}</td>
// // //             <td>{index.Item}</td>
// // //             <td>{index.dishUnit}</td>
// // //           </tr>
// // //         ))}
// // //       </table>
// // //     </>
// // //   );
// // // }

// // //  export default newRecipe;









import React from 'react'
import RecipeData from "../../RecipeData.json" 

import '../../components/pages/tabledata.css'
function newRecipe(){
	const DisplayData=RecipeData.map(
		(info)=>{
			return(
				<tr>
					<td>{info.ingredientId}</td>
 					<td>{info.dishId}</td>
 					<td>{info.Item}</td>
                  <td>{info.dishUnit}</td>
				</tr>
			)
		}
	)

	return(
		<>
		
			<table className="TT">
				<thead>
					<tr>
					<th>Ingredient Id</th>
				<th>Dish Id</th>
 					<th>Item</th>
                     <th>Dish Unit</th>
					</tr>
				</thead>
				<tbody className='TT'>
				
					
					{DisplayData}
					
				</tbody>
			</table>
			
	
		
        {/* <a href="/AddMenu"> <button className="btn btn--primary btn--medium"> </button>
        {" "}ADD ITEM </a> */}
        <div className='ADDBUTTON'>
		<a href="/AddMenu" className="Add">
        <button type="submit" className="btn btn--primary btn--medium">ADD ITEM</button>
        </a>
  
		</div>
		
    
      
      {/* <Footer/> */}
		</>
		
	)
}

export default newRecipe;


