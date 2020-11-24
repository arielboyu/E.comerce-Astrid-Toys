import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link,Redirect,useParams } from "react-router-dom";
import { useSelector } from "react-redux";


export default function OrderDetail() {
  const { idorden } = useParams();
  const getOrder = axios.get(
    `${process.env.REACT_APP_API_URL}/orders/${idorden}`);
  const [product, setProduct] = useState([]);
  const [order, setOrder] = useState([]);
  const [user,setUser] = useState({});
  const [total, setTotal] = useState(0)
  const userAct = useSelector((state) => state.user);
  useEffect(() => {
    getOrder.then((res) => {
      totalpr(res.data.products);
      setProduct(res.data.products);
      setOrder(res.data);
      setUser(res.data.user)
    });
  }, []);
  function totalpr(product){
    var cont = 0;
    product.forEach(element => {
      cont = cont + (element.price * element.orderdetails.quantity);
      setTotal(cont)
    });
  }
  return (
    <div className="container d-flex flex-column text-center mx-auto my-5 p-5 border shadow">
      {!userAct.isAdmin ? <Redirect to='/products'/> : null} 
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
              <th>Quantity</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            { product && product.map((p) => (
              <tr key={p.id}>
               <td>{p.id}</td>
               <td>{p.name}</td>
               <td>{p.orderdetails.quantity}</td>
               <td> ${" "} {p.orderdetails.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
            <h5> Total: ${" "}  {total}</h5>
            <Link to="/dashboard/orders/list" >
            <button className="btn btn-danger ml-2" >Back</button>
            </Link>
      </div>
    </div>
  );
}
