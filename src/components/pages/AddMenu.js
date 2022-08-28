import React, { useState } from "react";
import "../../AddMenu.css";
function AddMenu() {
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
        <div className="Cost1">
          <label className="form__label1" for="Cost">
            {" "}
            Cost1{" "}
          </label>
          <input
            type="form__input1"
            name=""
            id="Cost"
            className="form__input1"
            placeholder="Cost"
          />
        </div>
      </div>
      <div class="footer1">
        <button type="submit" class="btn1" href="/">
          ADD{" "}
        </button>
      </div>
    </div>
  );
}
export default AddMenu;
