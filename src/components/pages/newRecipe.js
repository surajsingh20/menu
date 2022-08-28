
import React from 'react'
import RecipeData from "../../RecipeData.json" 
import Footer from '../Footer'
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
				<tbody>
				
					
					{DisplayData}
					
				</tbody>
			</table>
			
	
		<button className="Add">
        {" "}
        <a href="/AddMenu"> ADD ITEM </a>
      </button>
      <Footer/>
		</>
		
	)
}

export default newRecipe;

