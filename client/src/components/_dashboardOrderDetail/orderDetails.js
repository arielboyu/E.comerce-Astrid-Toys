import React, { useState, useEffect} from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
//Este componente muestra los detalles de la orden y el total
// Falta hacer la prueba con varios productos que sumen el total a su orden !

export default function OrderDetail() {
    const {idorden}  = useParams()
    const getDetail = axios.get(`http://localhost:3002/orders/${idorden}`);
    const [detail, setDetail] = useState([]);
    useEffect(() => {
      getDetail.then((res) => {
        setDetail(res.data);
        console.log(res)
      });
    }, [])
   
    return (
     <div>
         <h1>ORDER DETAILS</h1>
         <table class="table table-borderless">
  <thead>
    <tr>
      <th>ID#</th>
      <th>State</th>
      <th>Discharge Date</th>
      <th>User Name</th>
      <th>Products</th>
      <th>Price</th>
      <th>Quantity</th>
      <th>Total</th>
    </tr>
  </thead>
  <tbody>
        {detail.map((d) => (
            <tr key={d.id}>
            <td>{d.id}</td>
            <td>{d.state}</td>
            <td>{d.createdAt}</td>
            <td>{d.user.username}</td>
            <td>{d.products[0].name}</td>
            <td>$ {d.products[0].orderdetails.price}</td>
            <td>{d.products[0].orderdetails.quantity}</td>
            <td>$ {d.products[0].orderdetails.quantity  *  d.products[0].orderdetails.price  }</td>
            <td>  
            </td>
            </tr>
           ))}
        </tbody>
     </table>
    </div>   
    );
    
}  
