import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function CategoriesList() {
  const getCategory = axios.get("http://localhost:3002/categories");
  const [category, setCategory] = useState([]);
  const [deleted, setDeleted] = useState(null);
  useEffect(() => {
    getCategory.then((res) => {
      setCategory(res.data);
    });
  }, []);

  // esta funcion elimina la categoria seteada en el estado local
  const handleDelete = () => {
    axios
      .delete(`http://localhost:3002/categories/delete/${deleted.id}`, deleted)
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
    <div>
      <div class="jumbotron">
        <h1 class="display-3">CRUD Categories</h1>
        <p class="lead">
        In this section the administrator can update the list of categories
        </p>
        <hr class="my-2" />
        <p class="lead">
          <Link to="/dashboard/category/create">
            <button class="btn btn-primary btn-lg">
              Add Category{" "}
              <ion-icon
                style={{ fontSize: "24px" }}
                name="add-circle-outline"
              ></ion-icon>
            </button>
          </Link>
        </p>
      </div>
      <table class="table table-reflow">
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
                className="btn btn-primary"
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
        class="modal"
        id="exampleModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                Categories
              </h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
                onClick={() => window.location.reload()}
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">Are you sure to delete? </div>
            <div class="modal-footer">
              <button
                onClick={() => {
                  handleDelete();
                  window.location.reload();
                }}
                type="button"
                class="btn btn-primary"
                data-dismiss="modal"
              >
                Yes
              </button>
              <button type="button" class="btn btn-danger" data-dismiss="modal">
                No
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
