import React, { useState, useEffect} from "react";
import axios from "axios";
import { Link,Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

export default function OrderTablePending() {
    const getOrderpe = axios.get(`${process.env.REACT_APP_API_URL}/orders/pending/all`);
    const [orderpe, setOrderpe] = useState([]);
    const user = useSelector((state) => state.user);
    useEffect(() => {
      getOrderpe.then((res) => {
        setOrderpe(res.data);
        console.log(res)
      });
    }, [])

    const handlerCancel = (orderid) => {
      console.log(orderid)
      axios
        .put(`${process.env.REACT_APP_API_URL}/orders/modify/cancel/${orderid}`)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => console.log(err));
    };
    return (
      <div className="firstContainer container d-flex flex-column text-center mx-auto my-5 p-5 border shadow">
        {!user.isAdmin ? <Redirect to='/products'/> : null}
        <div>
          <h1 className="display-3 text-center">Order pending list</h1>
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
              { orderpe.length && orderpe.map((o) => (
              <tr key={o.id}>
              <td>{o.id}</td>
              <td>{o.state}</td>
              <td>{ o.user.username}</td>
              <td>{o.createdAt}</td>
            <td><button class="btn btn-outline-danger" onClick={() => {handlerCancel(o.id); window.location.reload();}}>Cancel <ion-icon  name="close-sharp"></ion-icon> </button></td>
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
