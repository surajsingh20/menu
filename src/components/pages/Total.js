import React, { useContext } from "react";
import { Context } from "../../Context";
import menu from "../../menu";

export default function Total() {
  const [items] = useContext(Context);

  const totalprice = Object.keys(items).reduce((acc, curr) => {
    const [group, item] = curr.split("-");
    const amount = items[curr] * menu[group][item].price;
    return acc + amount;
  }, 0);

  return (
    <div className="total">
      <span className="total-title">Total:</span>
      <span className="total-price">Rs. {totalprice}</span>
    </div>
  );
}
