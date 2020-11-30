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
      cont = cont + (element.orderdetails.price * element.orderdetails.quantity);
      setTotal(cont)
    });
  }
  return (
    <div className="firstContainer container d-flex flex-column text-center mx-auto my-5 p-5 border shadow">
      <h1 className="display-3 text-center mb-5">Order Detail</h1>
      <div className="mx-auto rounded mb-5" style={{backgroundImage: "url(https://www.larepublica.net/storage/images/2018/10/08/20181008090118.impacfact.jpg)",  width: "95%",
        height: "300px",}} >
      </div>
      <div className="mt-4 d-flex justify-content-around bg-warning pt-3 text-white rounded">
        <p>ORDER ID: {"  "} {order.id}</p>
        <p><ion-icon name="information-circle-sharp"></ion-icon>STATE: {"  "}{order.state}  </p>
        <p><ion-icon name="person-sharp"></ion-icon> {"  "}{user.name} </p>
        <p><ion-icon name="time-sharp"></ion-icon> DATE:  {"  "} {order.createdAt}   </p>
      </div>
      <div>
        <table  className="table table-borderless mt-4" >
          <thead>
            <tr>
              <th>#</th>
              <th><ion-icon name="logo-reddit"></ion-icon> Products  </th>
              <th><ion-icon name="document-text-sharp"></ion-icon> Quantity  </th>
              <th><ion-icon name="logo-usd"></ion-icon> Price </th>
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
            <p className="display-4 mt-5"> Total: ${" "}  {total}</p>
            <Link to="/dashboard/orders/list" >
              <button className="btn btn-danger mt-5" >Back <ion-icon name="arrow-back-sharp"></ion-icon></button>
            </Link>
      </div>
      
    </div>
  );
}
