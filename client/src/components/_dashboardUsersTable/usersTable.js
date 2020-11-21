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
          <div style={{backgroundImage:"url(https://lh3.googleusercontent.com/proxy/4-JXFyszJUOAb1yzjztlAcqhH_eV9XenU958nEf1NAztxTVbdS4zG6-6qbek73s1BBNqMHcyosHQdrKw81rtyUZlw6uwLa_zTEbdDDCHiUPSi2wLBP3LXseH8Mw2u4E2PZZ1Vjc-nuArvcv84UW7GI1cbnCAQtHNUVSIUC-iLPSrkq8wBSSwqkGBn666EHShlEMqBUId_wYucqAIBapOEC8GNmPcwQx9N5tq)",  width: "100%",
           height: "280px",}}  >
          <h1 style={{background:"white"}}   className="display-3 text-center">USERS  LIST</h1>
         </div>
            <table class="table table-borderless">
            <thead>
              <tr>
                <th>ID#</th>
                <th>Name</th>
                <th>User Name</th>
                <th>Email</th>
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
              <td>{u.createdAt}</td>      
            </tr>    
           ))}
            </tbody>
            </table> 
      </div>
   </div>
    );
} 
