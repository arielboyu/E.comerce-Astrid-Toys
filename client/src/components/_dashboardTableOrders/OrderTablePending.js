import React, { useState, useEffect} from "react";
import axios from "axios";

export default function OrderTablePending() {
    const getOrderpe = axios.get(`${process.env.REACT_APP_API_URL}/orders/pending/all`);
    const [orderpe, setOrderpe] = useState([]);
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
      <div className="container d-flex flex-column text-center mx-auto my-5 p-5 border shadow">
        <div>
          <h1 className="display-3 text-center">ORDER PENDING LIST</h1>
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
              { orderpe.length && orderpe.map((o) => (
              <tr key={o.id}>
              <td>{o.id}</td>
              <td>{o.state}</td>
              <td>{ o.user.username}</td>
              <td>{o.createdAt}</td>
            <td><button className="btn btn-danger ml-2" onClick={() => {handlerCancel(o.id); window.location.reload();}}>Cancel</button></td>
            </tr>    
           ))}
            </tbody>
            </table>
        </div>   
      </div>
    );
} 
