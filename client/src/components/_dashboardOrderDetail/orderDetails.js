import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";


export default function OrderDetail() {
  const { idorden } = useParams();
  const getOrder = axios.get(
    `${process.env.REACT_APP_API_URL}/orders/${idorden}`);
  const [product, setProduct] = useState([]);
  const [order, setOrder] = useState([]);
  const [user,setUser] = useState({});
  useEffect(() => {
    getOrder.then((res) => {
      setProduct(res.data.products);
      setOrder(res.data);
      setUser(res.data.user)
    });
  }, []);

  return (
    <div className="container d-flex flex-column text-center mx-auto my-5 p-5 border shadow">
      <div>
      <h1 className="display-3 text-center">ORDER DETAILS</h1>
      <h7> ORDER ID: {"  "} {order.id}</h7>
      <h6>STATE: {"  "}{order.state}</h6>
      <h6>NAME: {"  "}{user.name}</h6>
      <h7>DISCHARGE DATE:  {"  "} {order.createdAt}</h7>
        <table class="table table-borderless">
          <thead>
            <tr>
              <th>ID#</th>
              <th>Products</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>SubTotal</th>
            </tr>
          </thead>
          <tbody>
            { product && product.map((p) => (
              <tr key={p.id}>
               <td>{p.id}</td>
               <td>{p.name}</td>
               <td>${" "}  {p.price}</td>
               <td>{p.orderdetails.quantity}</td>
               <td> ${" "} {p.orderdetails.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
            <h5>{}</h5>
            <Link to="/dashboard/orders/list" >
            <button className="btn btn-danger ml-2" >Back</button>
            </Link>
      </div>
    </div>
  );
}
