import React, { useState, useEffect} from "react";
import axios from "axios";
import { Link } from "react-router-dom";
// Tabla que muestra una lista de ordenes.
// Esta tabla es para el admin.
// Tiene que mostrar todas las ordenes de todos los usuarios

export default function OrderTable() {
    const getOrder = axios.get(`${process.env.REACT_APP_API_URL}/orders`);
    const [order, setOrder] = useState([]);
    useEffect(() => {
      getOrder.then((res) => {
        setOrder(res.data);
        console.log(res)
      });
    }, [])
    return (
      <div className="container d-flex flex-column text-center mx-auto my-5 p-5 border shadow">
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
                <th><Link to={"/dashboard/orders/pending"} ><button  className="btn btn-danger ml-2" >filter only by pending</button></Link></th>
              </tr>
            </thead>
            <tbody>
              {  order.length && order.map((o) => (
              <tr key={o.id}>
              <td>{o.id}</td>
              <td>{o.state}</td>
              <td>{o.user.username}</td>
              <td>{o.createdAt}</td>
              <td><Link to={`/dashboard/orders/detail/${o.id}`}>
              {/* para poder incluir los backticks debo colocar el path dentro de llaves */}
                <button  className="btn btn-danger ml-2">Detail</button>
              </Link></td>
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
