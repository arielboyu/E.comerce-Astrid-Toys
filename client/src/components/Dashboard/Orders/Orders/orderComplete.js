import React, { useState, useEffect} from "react";
import axios from "axios";
import { Link,Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

export default function OrderTableComplete() {
    const getOrderco = axios.get(`${process.env.REACT_APP_API_URL}/orders/complete/all`);
    const [orderco, setOrderco] = useState([]);
    const user = useSelector((state) => state.user);
    useEffect(() => {
      getOrderco.then((res) => {
        setOrderco(res.data);
        console.log(res)
      });
    }, [])

    const handlerDistpach = (orderid) => {
      console.log(orderid)
      axios
        .put(`${process.env.REACT_APP_API_URL}/orders/modify/dispatch/${orderid}`)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => console.log(err));
    };
    return (
      <div style={{background:"white"}}  className="container d-flex flex-column text-center mx-auto my-5 p-5 border shadow">
        {!user.isAdmin ? <Redirect to='/products'/> : null}
        <div>
          <h1 className="display-3 text-center">ORDER CANCEL LIST</h1>
            <table class="table table-borderless">
            <thead>
              <tr>
                <th>#</th>
                <th>State <ion-icon name="information-circle-sharp"></ion-icon> </th>
                <th>User Name <ion-icon name="person-sharp"></ion-icon> </th>
                <th>Discharge Date <ion-icon name="time-sharp"></ion-icon> </th>
              </tr>
            </thead>
            <tbody>
              { orderco.length && orderco.map((o) => (
              <tr key={o.id}>
              <td>{o.id}</td>
              <td>{o.state}</td>
              <td>{ o.user.username}</td>
              <td>{o.createdAt}</td>
              <td><button class="btn btn-outline-success" onClick={() => {handlerDistpach(o.id); window.location.reload();}}>SEND  <ion-icon name="navigate-sharp"></ion-icon> </button></td>
            </tr>
           ))}
            </tbody>
            </table>
            <Link to="/dashboard/orders/list" >
            <button className="btn btn-danger ml-2" >Back <ion-icon name="arrow-back-sharp"></ion-icon></button>
            </Link>
        </div>
      </div>
    );
}
