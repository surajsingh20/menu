import React from "react";
import "../../AddMenu.css";
// import Menu from "./Menu";

import Swal from "sweetalert2";
function AddMenu() {

  const onButtonClick = () => {
    // window.alert('Item added')
   
      Swal.fire({
          title: "Success",
          text: "Alert successful",
          icon: "success",
          confirmButtonText: "OK",
        });
  
  };
  


  return (
    <div className="form1">
      <div className="form-body1">
        <div className="Dish Id">
          <label className="form__label1" for="ID">
            {" "}
            Dish Id{" "}
          </label>
          <input className="form__input1" type="ID" id="ID" placeholder="ID" />
        </div>
        <div className="">
          <label className="form__label1" for="Name">
            {" "}
            Name{" "}
          </label>
          <input
            type="form__input1"
            name=""
            id="Name"
            className="form__input1"
            placeholder="Name"
          />
        </div>
        <div className="description1">
          <label className="form__label1" for="description">
            Description{" "}
          </label>
          <input
            type="form__input1"
            id="description"
            className="form__input1"
            placeholder="description"
          />
        </div>
        <div className="price1">
          <label className="form__label1" for="price">
            {" "}
            Price{" "}
          </label>
          <input
            type="form__input1"
            name=""
            id="price"
            className="form__input1"
            placeholder="price"
          />
        </div>
      </div>
      <div class="footer1">
        {/* <button type="submit" class="btn1" href="/">
          ADD{" "}
        </button> */}
        <a >
        <button type="submit" onClick={onButtonClick} className="btn btn--primary btn--medium">Add</button>
        </a>
      </div>
    </div>
   
  );
}
export default AddMenu;


// import React, { Component, useEffect, useState } from 'react';
// // import MenuService from '../services/MenuService';
// import {mains} from "../../menu.json";

// //  const fs = require("fs");
//  import fs from 'fs';
// function AddMenu(){
      
//     const [Name, SetName] = useState('');
//     const [price, SetPrice] = useState(0);
//     const [type, SetType] = useState('');
//     const [dishId, SetDishId] = useState(mains.length+1);

//     const saveMenu = (e) => {
//         e.preventDefault();
//         SetDishId(dishId+1);
//         let new_data = {dishId : dishId ,name: Name, description: type ,price: price };
//         // console.log('menu => ' + JSON.stringify(menu));
//         // MenuService.saveMenuH2(menu).then(res =>  {
//         //     this.props.history.push('/Menu');
//         // });

//         //add new data into mains array
//         mains.push( new_data);
//         //console.log('menu => ' + JSON.stringify(mains));

        
//       // Storing the JSON format data in myObject
//       //const fs = require("fs");
//       //var data = fs.readFileSync('../../menu.json', {encoding: 'utf-8'});
//       // import * as fs from 'fs';

//       // const result = 
//       // console.log(result);
      
//       var myObject = JSON.parse('../../menu.json');
      
//       // Defining new data to be added
//       // let newData = {
//       // country: "England",
//       // };
      
//       // Adding the new data to our object
//       myObject.push(new_data);
      
//       // Writing to our JSON file
//       var newData2 = JSON.stringify(myObject);
//       //replace all data
//       fs.writeFile("data2.json", newData2, (err) => {
//       // Error checking
//       if (err) throw err;
//       console.log("New data added");
//       });
//     };







//   //   const changeNameHandler= (event) => {
//   //     SetName(event.target.value);
//   // }
//     const changeNameHandler= (event) => {
//         SetName(event.target.value);
//     }
//     const changeCostHandler= (event) => {
//         SetPrice(event.target.value);
//     }
//     const changeTypeHandler= (event) => {
//        SetType(event.target.value);
//     }
   

    
//         return (
//             <div className="container">
//                 <div className= "row">
//                     <div className="card col-md-6 offset-md-3 offser-md-3">
//                         <h3 className="text-center">Add Menu</h3>
//                             <div className="card-body">
//                                <form>
//                                    <div className="form-group">
//                                        <label>Name :</label>
//                                        <input placeholder="Name" name = "Name" className="form-control"
//                                             value={Name} onChange={changeNameHandler}/>
//                                    </div>
//                                    <div className="form-group">
//                                        <label>Cost :</label>
//                                        <input placeholder="Cost" name = "Cost" className="form-control"
//                                             value={price} onChange={changeCostHandler}/>
//                                    </div>
//                                    <div className="form-group">
//                                        <label>description :</label>
//                                        <input placeholder="Type" name = "Type" className="form-control"
//                                             value={type} onChange={changeTypeHandler}/>
//                                    </div>


//                                    <button className="btn btn-success" onClick={saveMenu}>Save</button>
//                                    {/* <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button> */}
//                                </form>
//                             </div>
//                     </div>
//                 </div>
//             </div>
//         );
    
// }

// export default AddMenu;