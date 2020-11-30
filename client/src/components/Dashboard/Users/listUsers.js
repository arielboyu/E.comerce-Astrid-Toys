import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const getUsers = axios.get(`${process.env.REACT_APP_API_URL}/users`);

export default function UsersTable() {
  const [user, setUser] = useState([]);
  const [deleted, setDeleted] = useState(null);
  const [changeRol, setChangeRol] = useState(false);
  const userAct = useSelector((state) => state.user);
  useEffect(() => {
    getUsers.then((res) => {
      setUser(res.data);
    });
  }, []);

  const handleDelete = () => {
    axios
      .delete(
        `${process.env.REACT_APP_API_URL}/users/delete/${deleted.id}`,
        deleted,
        { withCredentials: true }
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  };
  const handleSubmit = (u) => {
    setDeleted(u);
  };

  const handleAdmin = (u) => {
    const { id, isAdmin } = u;
    axios
      .put(`${process.env.REACT_APP_API_URL}/users/change/rol/${id}`)
      .then((r) => console.log("Rol change"))
      .catch((er) => console.log("Rol unchange"));
    setChangeRol(!changeRol);
  };

  return (
    <div className="firstContainer container d-flex flex-column text-center mx-auto my-5 p-5 border shadow">
      <div className="mx-auto w-100">
        <h1 className="display-3 text-center mb-2">
            USERS LIST
        </h1>
        <div
          style={{
            backgroundImage:
              "url(https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/1200/public/media/image/2020/10/figuras-funko-pop-2089019.jpg?itok=soYTFCkB)",
            width: "95%",
            height: "300px",
          }}
          className="rounded mx-auto mb-5"
        >
          
        </div>
        <table className="table table-darkness">
          <thead>
            <tr>
              <th>#</th>
              <th>
                Name <ion-icon name="person-sharp"></ion-icon>{" "}
              </th>
              <th>
                Email <ion-icon name="mail-open-sharp"></ion-icon>
              </th>
              <th>
                Active <ion-icon name="checkbox-sharp"></ion-icon>
              </th>
              <th>
                IsAdmin <ion-icon name="construct-sharp"></ion-icon>
              </th>
              <th>
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {user.length &&
              user.map((u) => (
                <tr key={u.id}>
                  <td>{u.id}</td>
                  <td>{u.name}</td>
                  <td>{u.email}</td>
                  <td>{u.active.toString()}</td>
                  <td>{u.isAdmin.toString()}</td>
                  <td>
                    <button
                      onClick={() => handleSubmit(u)}
                      type="submit"
                      className="btn btn-danger"
                      data-toggle="modal"
                      data-target="#exampleModal"
                    >
                      Delete <ion-icon name="trash-sharp"></ion-icon>
                    </button>
                    {!u.isAdmin ? (
                      <button
                        onClick={() => handleAdmin(u)}
                        type="submit"
                        className="ml-3 btn btn-info"
                      >
                        Admin <ion-icon name="person-add-sharp"></ion-icon>
                      </button>
                    ) : (
                      <></>
                    )}
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
                <button
                  type="button"
                  className="btn btn-danger"
                  data-dismiss="modal"
                >
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
