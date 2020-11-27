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
      <div className="firstContainer container d-flex flex-column text-center mx-auto my-5 p-5 border shadow">
        {!user.isAdmin ? <Redirect to='/products'/> : null}
        <div >
          <div  style={{backgroundImage:"url(https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/1200/public/media/image/2020/10/figuras-funko-pop-2089019.jpg?itok=soYTFCkB)",  width: "100%",
           height: "300px",}}   >
          <h1 style={{background:"white"}}   className="display-3 text-center">Order list</h1>
         </div>
         <div className="mt-4" >
          <table class="table table-borderless">
            <thead>
              <tr>
                <th>#</th>
                <th>State <ion-icon name="information-circle-sharp"></ion-icon></th>
                <th>User Name <ion-icon name="person-sharp"></ion-icon></th>
                <th>Discharge Date <ion-icon name="time-sharp"></ion-icon></th>
                <th><div className="btn btn-dark" class="btn-group dropup">
                <button  class="btn btn-secondary dropdown-toggle"  type="button" id="dropdownMenuButon" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <ion-icon name="reorder-three-sharp"></ion-icon>
                Filter
                </button>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuButon" style={{background:"grey"}} >
                <Link to={"/dashboard/orders/list/pending"}><button style={{fontSize:"22px"}} class="dropdown-item">By Pending  <ion-icon style={{fontSize:"28px"}} name="download-sharp"></ion-icon></button></Link>
                <Link to={"/dashboard/orders/list/complete"}> <button style={{fontSize:"22px"}}  class="dropdown-item">By Complete  <ion-icon style={{fontSize:"28px"}} name="checkmark-done-sharp"></ion-icon> </button></Link>
                <Link to={"/dashboard/orders/list/cancel"}><button style={{fontSize:"22px"}} class="dropdown-item">By Cancel   <ion-icon style={{fontSize:"28px"}} name="close-sharp"></ion-icon> </button></Link>
               </div>
              </div></th>
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
                <button class="btn btn-dark">Detail <ion-icon name="calculator-sharp"></ion-icon> </button>
              </Link></td>
              <td>      {o.state === "PENDING" ? (
              <button class="btn btn-outline-danger" onClick={() => {handlerCancel(o.id); window.location.reload();}}>Cancel <ion-icon  name="close-sharp"></ion-icon></button>
                ) : (
                <></>
               )}
              {o.state === "COMPLETE" ? (
              <button class="btn btn-outline-success"onClick={() => {handlerDistpach(o.id); window.location.reload();}}>Send <ion-icon name="navigate-sharp"></ion-icon></button>
              ) : (
             <></>
            )}
            {o.state === "CANCELLED" ? (
            <button class="btn btn-outline-danger" onClick={() => {handlerDelete(o.id); window.location.reload();}}>Delete <ion-icon name="trash-sharp"></ion-icon></button>
            ) : (
           <></>
          )}</td>
            </tr>
           ))}
            </tbody>
            </table>
            <Link to="/dashboard" >
            <button className="btn btn-danger ml-2" >Back <ion-icon name="arrow-back-sharp"></ion-icon></button>
            </Link>
        </div>
      </div>
    </div>
    );
}
