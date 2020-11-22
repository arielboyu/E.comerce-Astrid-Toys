import React, { useState, useEffect} from "react";
import axios from "axios";
import { Link } from "react-router-dom";


export default function UsersTable() {
    const getUsers = axios.get(`${process.env.REACT_APP_API_URL}/users`);
    const [user, setUser] = useState([]);
    useEffect(() => {
      getUsers.then((res) => {
        setUser(res.data);
        console.log(res)
      });
    }, [])
    return (
      <div className="container d-flex flex-column text-center mx-auto my-5 p-5 border shadow">
        <div>
          <div style={{backgroundImage:"url(https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/1200/public/media/image/2020/10/figuras-funko-pop-2089019.jpg?itok=soYTFCkB)",  width: "100%",
           height: "370px",}}  >
          <h1 style={{background:"white"}}   className="display-3 text-center">USERS  LIST</h1>
         </div>
            <table class="table table-borderless">
            <thead>
              <tr>
                <th>ID#</th>
                <th>Name</th>
                <th>User Name</th>
                <th>Email</th>
                <th>Active</th>
                <th>IsAdmin</th>
                <th>Discharge Date</th>
              </tr>
            </thead>
            <tbody>
              {  user.length && user.map((u) => (
              <tr key={u.id}>
              <td>{u.id}</td>
              <td>{u.name}</td>
              <td>{ u.username}</td>
              <td>{u.email}</td>
              <td>{u.active.toString()}</td>
              <td>{u.isAdmin.toString()}</td>
              <td>{u.createdAt}</td>
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
