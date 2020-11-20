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
          <div  style={{backgroundImage: "url(https://lh3.googleusercontent.com/proxy/oeisQYB4L0Kmy6vkWAX6xC3hcCKuXGPMjy9ZxZ-C35a8C1ep8YY2Wx-IDclYM4cn-Zk_0uKlmnlSlCoxX_AMRwrk6dlN5q0iAocTZI1ccd2au0V8WqaNqvPqFp0cGUP8uG5konopWqEgg7MVe1WnxH7YDfWXvZkNVBJ8PN_YHP135GTJu9Ip0y-dOTxI5Q5v5zwV23R_n_aApp3qaDXFGJo-BoYNL6FmSEW3)",  width: "100%",
           height: "280px",}}   >
          <h1 style={{background:"white"}}   className="display-3 text-center">USERS ORDER LIST</h1>
         </div>
            <table class="table table-borderless">
            <thead>
              <tr>
                <th>ID#</th>
                <th>State</th>
                <th>User Name</th>
                <th>Discharge Date</th>
                <th><Link to={"/dashboard/orders/list/pending"} ><button  className="btn btn-danger ml-2" >filter only by pending</button></Link></th>
              </tr>
            </thead>
            <tbody>
              { order.length && order.map((o) => (
              <tr key={o.id}>
              <td>{o.id}</td>
              <td>{o.state}</td>
              <td>{ o.user.username}</td>
              <td>{o.createdAt}</td>
              <td><Link to={`/dashboard/orders/detail/${o.id}`}>
              {/* para poder incluir los backticks debo colocar el path dentro de llaves */}
                <button  className="btn btn-danger ml-2">Detail</button>
              </Link></td>
            </tr>    
           ))}
            </tbody>
            </table>
        </div>   
      </div>
    );
} 
