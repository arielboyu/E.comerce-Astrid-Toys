import React, { useState, useEffect} from "react";
import axios from "axios";
// Tabla que muestra una lista de ordenes.
// Esta tabla es para el admin.
// Tiene que mostrar todas las ordenes de todos los usuarios

export default function OrderTable() {
    const getOrder = axios.get("http://localhost:3002/orders");
    const [order, setOrder] = useState([]);
    useEffect(() => {
      getOrder.then((res) => {
        setOrder(res.data);
        console.log(res)
      });
    }, [])
    return (
     <div>
         <h1>USERS ORDER LIST</h1>
         <table class="table table-borderless">
  <thead>
    <tr>
      <th>ID#</th>
      <th>State</th>
      <th>createdAt</th>
      <th>User</th>
      <th>UserName</th>
      <th>ProductName</th>
      <th>Price</th>
      <th>Stock</th>
    </tr>
  </thead>
  <tbody>
        {order.map((o) => (
            <tr key={o.id}>
            <td>{o.id}</td>
            <td>{o.state}</td>
            <td>{o.createdAt}</td>
            <td>{o.user.name}</td>
            <td>{o.user.username}</td>
            <td>{o.products[0].name}</td>
            <td>{o.products[0].price}</td>
           <td>{o.products[0].stock}</td>
            </tr>
           ))}
        </tbody>
     </table>
    </div>   
    );
}  


