import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const getCategory = axios.get(`${process.env.REACT_APP_API_URL}/categories`);
export default function CategoriesList() {
  const [category, setCategory] = useState([]);
  const [deleted, setDeleted] = useState(null);
  useEffect(() => {
    getCategory.then((res) => {
      console.log(category)
      setCategory(res.data);
      console.log(res)
    });
  }, []);

  // esta funcion elimina la categoria seteada en el estado local
  const handleDelete = () => {
    axios
      .delete(`${process.env.REACT_APP_API_URL}/categories/delete/${deleted.id}`, deleted)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  };

  // esta funcion setea el estado con la categoria a eliminar
  const handleSubmit = (c) => {
    setDeleted(c);
  };
  return (
    <div className="container d-flex flex-column text-center mx-auto my-5 p-5 border shadow">
      <div className="">
        <h1 className="display-3 text-center">CRUD Categories</h1>
        <p className="lead d-none d-sm-block">
        In this section the administrator can update the list of categories
        </p>
        <hr className="my-2" />
        <p className="lead ">
          <Link to="/dashboard/category/create">
            <button className="btn btn-danger btn-lg d-flex align-items-center mx-auto mt-3">
            <ion-icon style={{fontSize:"24px"}} name="add-circle-outline"></ion-icon>{" "} Add Category 
            </button>
          </Link>
        </p>
      </div>
      <table className="table table-reflow w-75 mx-auto mb-5">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {category.map((c) => (
            <tr key={c.id}>
              <td>{c.id}</td>
              <td>{c.name}</td>
              <td>{c.description}</td>
              <button
                onClick={() => handleSubmit(c)}
                type="submit"
                className="btn btn-danger"
                data-toggle="modal"
                data-target="#exampleModal"
              >
                Delete
              </button>
            </tr>
          ))}
        </tbody>
      </table>
      {/* <!-- Modal --> */}
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
                Categories
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
  );
}
