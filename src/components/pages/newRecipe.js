
import React from 'react'
import RecipeData from "../../RecipeData.json" 
import Footer from '../Footer'
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

