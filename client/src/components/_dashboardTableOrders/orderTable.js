import React, { useState, useEffect,useParams } from "react";
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
        console.log("use")
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
      <th>LastName</th>
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
            <td>{o.user.lastname}</td>
            <td>Funkopop</td>
            <td>$ 3.5000</td>
            <td>75</td>
            </tr>
           ))}
        </tbody>
     </table>
    </div>   
    );
}  


