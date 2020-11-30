import React, { useState, useEffect} from "react";
import axios from "axios";
import { Link,Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

export default function OrderTableCancel() {
    const getOrderca = axios.get(`${process.env.REACT_APP_API_URL}/orders/cancel/all`);
    const [orderca, setOrderca] = useState([]);
    const user = useSelector((state) => state.user);
    useEffect(() => {
      getOrderca.then((res) => {
        setOrderca(res.data);
        
      });
    }, [])

    const handlerDelete = (orderid) => {
      
      axios
        .delete(`${process.env.REACT_APP_API_URL}/orders/delete/${orderid}`)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => console.log(err));
    };
    return (
      <div style={{background:"white"}}  className="container d-flex flex-column text-center mx-auto my-5 p-5 border shadow">
        {!user.isAdmin ? <Redirect to='/products'/> : null}
        <h1 className="display-3 text-center">Order Cancel List</h1>
        <div className="mx-auto" style={{backgroundImage: "url(https://static.seattletimes.com/wp-content/uploads/2017/12/9d655134-da2c-11e7-95fd-67055a788fec-780x508.jpg)",  width: "75%",
          height: "244px",}} >
        </div>
        <div className="mt-4" >
            <table class="table table-borderless">
            <thead>
              <tr>
                <th>#</th>
                <th>State <ion-icon name="information-circle-sharp"></ion-icon></th>
                <th>User Name <ion-icon name="person-sharp"></ion-icon></th>
                <th>Discharge Date <ion-icon name="time-sharp"></ion-icon></th>
              </tr>
            </thead>
            <tbody>
              { orderca.length && orderca.map((o) => (
              <tr key={o.id}>
              <td>{o.id}</td>
              <td>{o.state}</td>
              <td>{ o.user.username}</td>
              <td>{o.createdAt}</td>
              <td><button class="btn btn-outline-danger"onClick={() => {handlerDelete(o.id); window.location.reload();}}>
              Delete  <ion-icon name="trash-sharp"></ion-icon> </button>
              </td>
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
