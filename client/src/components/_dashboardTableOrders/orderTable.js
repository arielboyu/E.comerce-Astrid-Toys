import React, { useState, useEffect} from "react";
import axios from "axios";
import { Link } from "react-router-dom";
// Tabla que muestra una lista de ordenes.
// Esta tabla es para el admin.
// Tiene que mostrar todas las ordenes de todos los usuarios

export default function OrderTable() {
    const getOrder = axios.get("http://localhost:3002/orders");
    const [order, setOrder] = useState([]);
    useEffect(() => {
      getOrder.then((res) => {
        setOrder(res.data);
        // console.log(res)
      });
    }, [])
  
    const handlerCancel = (orderid) => {
      console.log(orderid)
      axios
        .put(`http://localhost:3002/orders/modify/cancel/${orderid}`)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => console.log(err));
    };
  
    return (
     <div>
         <h1>USERS ORDER LIST</h1>
         <table class="table table-borderless">
  <thead>
    <tr>
      <th>ID#</th>
      <th>State</th>
      <th>User Name</th>
      <th>Discharge Date</th>
      <th>Total</th>
    </tr>
  </thead>
  <tbody>
        {order.map((o) => (
            <tr key={o.id}>
            <td>{o.id}</td>
            <td>{o.state}</td>
            <td>{o.user.username}</td>
            <td>{o.createdAt}</td>
            <td> $ { o.products.length &&   o.products[0].orderdetails.price * o.products[0].orderdetails.quantity}</td>
            <td><Link to={`/dashboard/orders/detail/${o.id}`}>
             {/* para poder incluir los backticks debo colocar el path dentro de llaves */}
          <button >Detail</button>
        </Link></td>
            <td><button
            onClick={() => {handlerCancel(o.id); window.location.reload();  }}
            >Cancel</button>
            </td>
            </tr>    
           ))}
        </tbody>
     </table>
    </div>   
    );
  
   
} 
