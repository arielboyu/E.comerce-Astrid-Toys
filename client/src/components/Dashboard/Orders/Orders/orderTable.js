import React, { useState, useEffect} from "react";
import axios from "axios";
import { Link,Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
// Tabla que muestra una lista de ordenes.
// Esta tabla es para el admin.
// Tiene que mostrar todas las ordenes de todos los usuarios
export default function OrderTable() {
    const getOrder = axios.get(`${process.env.REACT_APP_API_URL}/orders`);
    const [order, setOrder] = useState([]);
    const user = useSelector((state) => state.user);
    useEffect(() => {
      getOrder.then((res) => {
        setOrder(res.data);
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
    const handlerDistpach = (orderid) => {
      console.log(orderid)
      axios
        .put(`${process.env.REACT_APP_API_URL}/orders/modify/dispatch/${orderid}`)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => console.log(err));
    };
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
        <div >
          <div  style={{backgroundImage:"url(https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/1200/public/media/image/2020/10/figuras-funko-pop-2089019.jpg?itok=soYTFCkB)",  width: "100%",
           height: "370px",}}   >
          <h1 style={{background:"white"}}   className="display-3 text-center">ORDER LIST</h1>
         </div>
            <table class="table table-borderless">
            <thead>
              <tr>
                <th>ID#</th>
                <th>State</th>
                <th>User Name</th>
                <th>Discharge Date</th>
                <th><Link to={"/dashboard/orders/list/pending"}><button className="btn btn-dark" > Filter by pending</button></Link></th>
                <th><Link to={"/dashboard/orders/list/complete"}> <button className="ml-3 btn btn-info" >  Filter by Complete</button></Link></th>
                <th><Link to={"/dashboard/orders/list/cancel"}><button className="btn btn-danger ml-2" >  Filter by Cancel</button></Link></th>
              </tr>
            </thead>
            <tbody>
              {  order.length  && order.map((o) => (
              <tr key={o.id}>
              <td>{o.id}</td>
              <td>{o.state}</td>
              <td>{o.user.username}</td>
              <td>{o.createdAt}</td>
              <td><Link to={`/dashboard/orders/detail/${o.id}`}>
              {/* para poder incluir los backticks debo colocar el path dentro de llaves */}
                <button class="btn btn-secondary">Detail</button>
              </Link></td>
              <td>      {o.state === "PENDING" ? (
              <button className="btn btn-danger ml-2" onClick={() => {handlerCancel(o.id); window.location.reload();}}>Cancel</button>
                ) : (
                <></>
               )}
              {o.state === "COMPLETE" ? (
              <button class="btn btn-success" onClick={() => {handlerDistpach(o.id); window.location.reload();}}>Send</button>
              ) : (
             <></>
            )}
            {o.state === "CANCELLED" ? (
            <button class="btn btn-warning"onClick={() => {handlerDelete(o.id); window.location.reload();}}>Delete</button>
            ) : (
           <></>
          )}</td>
            </tr>
           ))}
            </tbody>
            </table>
            <Link to="/dashboard" >
            <button className="btn btn-danger ml-2" >Back</button>
            </Link>
        </div>
      </div>
    );
}
//   <th> <select class="form-control form-control-sm" > Filter By State
//      <option className="btn btn-dark" >Filter By pending</option>
// </select></th>
