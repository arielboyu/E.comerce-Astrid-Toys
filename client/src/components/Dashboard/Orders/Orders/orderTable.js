import React, { useState, useEffect} from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

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
        <h1 className="display-3 text-center mb-2">Orders</h1>
        <div className="mx-auto rounded" style={{backgroundImage:"url(https://images2.minutemediacdn.com/image/upload/c_crop,h_1122,w_2000,x_0,y_91/v1554924465/shape/mentalfloss/546285-28549976060_561dba798c_o-flickr.jpg?itok=yIvvw9Ax)", backgroundRepeat: "no-repeat", backgroundSize: "cover", width: "95%", height: "300px",}}></div>
        <div className="mt-4">
          <table class="table table-borderless">
            <thead className="my-auto bg-warning rounded mb-5">
              <tr className="">
                <th>#</th>
                <th><ion-icon name="information-circle-sharp"></ion-icon> State </th>
                <th><ion-icon name="person-sharp"></ion-icon> User Name </th>
                <th><ion-icon name="time-sharp"></ion-icon> Discharge Date </th>
                <th> Details</th>
                <th> <div className="btn btn-dark" class="btn-group dropup">
                    <button  class="btn btn-outline-dark dropdown-toggle" type="button" id="dropdownMenuButon" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      <ion-icon name="reorder-three-sharp"></ion-icon>
                      Filter
                    </button>
                    <div class="dropdown-menu" aria-labelledby="dropdownMenuButon" style={{background:"grey"}} >
                      <Link to={"/dashboard/orders/list/pending"}>
                        <button style={{fontSize:"22px"}} class="dropdown-item">
                          <ion-icon style={{fontSize:"28px"}} name="download-sharp"></ion-icon>
                          By Pending 
                        </button>
                      </Link>
                      <Link to={"/dashboard/orders/list/complete"}> 
                        <button style={{fontSize:"22px"}} className="dropdown-item">
                          <ion-icon style={{fontSize:"28px"}} name="checkmark-done-sharp"></ion-icon> 
                          By Complete  
                        </button>
                      </Link>
                      <Link to={"/dashboard/orders/list/cancel"}>
                        <button style={{fontSize:"22px"}} class="dropdown-item">
                          <ion-icon style={{fontSize:"28px"}} name="close-sharp"></ion-icon> 
                          By Cancel 
                        </button>
                      </Link>
                    </div>
                  </div> </th>
              </tr>
            </thead>
            <tbody className="mt-5">
              {  order.length  && order.map((o) => (
              <tr key={o.id}>
                <td>{o.id}</td>
                <td>{o.state}</td>
                <td>{o.user.username}</td>
                <td>{o.createdAt}</td>
                <td>
                  <Link to={`/dashboard/orders/detail/${o.id}`}>
                    <button class="btn btn-dark">
                      <ion-icon name="calculator-sharp"></ion-icon> 
                      Detail 
                    </button>
                  </Link>
                </td>
                <td>    

                  {o.state === "PENDING" ? (
                  <button class="btn btn-outline-danger w-100" onClick={() => {handlerCancel(o.id); window.location.reload();}}>
                    <ion-icon  name="close-sharp"></ion-icon>
                    Cancel 
                  </button>
                  ) : ( <> </> )}

                  {o.state === "COMPLETE" ? (
                  <button class="btn btn-outline-success w-100"onClick={() => {handlerDistpach(o.id); window.location.reload();}}>
                    <ion-icon name="navigate-sharp"></ion-icon>
                    Send 
                  </button> ) : ( <></> )}

                  {o.state === "CANCELLED" ? (
                  <button class="btn btn-outline-danger w-100" onClick={() => {handlerDelete(o.id); window.location.reload();}}>
                    <ion-icon name="trash-sharp"></ion-icon>
                    Delete 
                  </button>
                  ) : ( <></> )}

                </td>
              </tr>
              ))}
            </tbody>
          </table>
          <Link to="/dashboard" >
            <button className="btn btn-danger mt-5 w-25" >
              BACK
            </button>
          </Link>
        </div>
      </div>
  
    );
}
