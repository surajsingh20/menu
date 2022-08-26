import React, { useState, useEffect } from "react";
import "../../tabledata.css";
function TableData() {
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
      <h1>Inventory</h1>
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

export default TableData;
