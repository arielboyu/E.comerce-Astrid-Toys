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
        console.log(res)
      });
    }, [])

    const handlerDelete = (orderid) => {
      console.log(orderid)
      axios
        .delete(`${process.env.REACT_APP_API_URL}/orders/delete/${orderid}`)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => console.log(err));
    };
    return (
      <div className="container d-flex flex-column text-center mx-auto my-5 p-5 border shadow">
        {!user.isAdmin ? <Redirect to='/products'/> : null}
        <div>
          <h1 className="display-3 text-center">ORDER CANCEL LIST</h1>
            <table class="table table-borderless">
            <thead>
              <tr>
                <th>ID#</th>
                <th>State</th>
                <th>User Name</th>
                <th>Discharge Date</th>
              </tr>
            </thead>
            <tbody>
              { orderca.length && orderca.map((o) => (
              <tr key={o.id}>
              <td>{o.id}</td>
              <td>{o.state}</td>
              <td>{ o.user.username}</td>
              <td>{o.createdAt}</td>
              <td><button class="btn btn-warning"onClick={() => {handlerDelete(o.id); window.location.reload();}}>Delete</button></td>
            </tr>
           ))}
            </tbody>
            </table>
            <Link to="/dashboard/orders/list" >
            <button className="btn btn-danger ml-2" >Back</button>
            </Link>
        </div>
      </div>
    );
}
