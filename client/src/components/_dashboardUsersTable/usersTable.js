import React, { useState, useEffect} from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const getUsers = axios.get(`${process.env.REACT_APP_API_URL}/users`);

export default function UsersTable() {
    const [user, setUser] = useState([]);
    const [deleted, setDeleted] = useState(null);
    const [changeRol, setChangeRol]= useState(false)
    useEffect(() => {
      getUsers.then((res) => {
        setUser(res.data);
      });
    }, [])


    const handleDelete = () => {
      axios
        .delete(`${process.env.REACT_APP_API_URL}/users/delete/${deleted.id}`, deleted, { withCredentials: true })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => console.log(err));
    };
    const handleSubmit = (u) => {
      setDeleted(u);
    };

    const handleAdmin=(u)=>{
      const {id, isAdmin} = u
      axios.put(`${process.env.REACT_APP_API_URL}/users/change/rol/${id}`)
      .then(r => console.log("Rol change"))
      .catch(er => console.log("Rol unchange"))
      setChangeRol(!changeRol)
    }

    return (
      <div className="container d-flex flex-column text-center mx-auto my-5 p-5 border shadow">
        <div>
          <div style={{backgroundImage:"url(https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/1200/public/media/image/2020/10/figuras-funko-pop-2089019.jpg?itok=soYTFCkB)",  width: "100%",
           height: "370px",}}  >
          <h1 style={{background:"white"}}   className="display-3 text-center">USERS  LIST</h1>
         </div>
            <table className="table table-darkness">
            <thead>
              <tr>
                <th>ID#</th>
                <th>Name</th>
                <th>Email</th>
                <th>Active</th>
                <th>IsAdmin</th>
              </tr>
            </thead>
            <tbody>
              {  user.length && user.map((u) => (
              <tr key={u.id}>
              <td>{u.id}</td>
              <td>{u.name}</td>
              <td>{u.email}</td>
              <td>{u.active.toString()}</td>
              <td>{u.isAdmin.toString()}</td>
              <td><button
                onClick={() => handleSubmit(u)}
                type="submit"
                className="btn btn-danger"
                data-toggle="modal"
                data-target="#exampleModal"
              >
                Delete
              </button>
              {!u.isAdmin ? (
                <button
                onClick={() => handleAdmin(u)}
                type="submit"
                className="ml-3 btn btn-info"
              >
                Admin
              </button>
              ):<></>}
              </td>
            </tr>
           ))}
            </tbody>
            </table>
            <Link to="/dashboard" >
            <button className="btn btn-danger ml-2" >Back</button>
            </Link>
            <div
              className="modal"
              id="exampleModal"
              tabindex="-1"
              role="dialog"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog" role="document">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">
                      Users
                    </h5>
                    <button
                      type="button"
                      className="close"
                      data-dismiss="modal"
                      aria-label="Close"
                      onClick={() => window.location.reload()}
                    >
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div className="modal-body">Are you sure to delete? </div>
                  <div className="modal-footer">
                    <button
                      onClick={() => {
                        handleDelete();
                        window.location.reload();
                      }}
                      type="button"
                      className="btn btn-danger"
                      data-dismiss="modal"
                    >
                      Yes
                    </button>
                    <button type="button" className="btn btn-danger" data-dismiss="modal">
                      No
                    </button>
                  </div>
                </div>
              </div>
          </div>
      </div>
   </div>
    );
}
