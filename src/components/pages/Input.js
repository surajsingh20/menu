import React, { useContext } from "react";
import { Context } from "../../Context";
import "../../styles.css";
export default function Input({ type, name, index }) {
  const [items, updateItem] = useContext(Context);

  return (
    <input
    className="input"
      type="text1"
      inputmode="numeric"
      pattern="[0-9]*"
      onChange={({ target }) => updateItem(type, index, target.value)}
      // name={name.replace(" ", "-").toLowerCase()}
    />
  );
}
