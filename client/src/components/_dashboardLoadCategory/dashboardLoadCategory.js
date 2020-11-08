import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./dashboardLoadCategory.module.css";

function DashboardLoadCategory() {
  const [categoryLoad, setCategory] = useState({
    name: "",
    description: "",
  });

  function handlerChange(e) {
    setCategory({ ...categoryLoad, [e.target.name]: e.target.value });
  }

  function handlerFormSubmit(e) {
    axios
      .post("http://localhost:3002/categories/create", categoryLoad)
      .then((response) => {
        console.log("Categoria Cargada");
      })
      .catch((e) => {
        console.log(e);
      });
    e.preventDefault();
  }

  return (
    <div>
      <h2 class="display-4 ">New Category</h2>
      <form onSubmit={handlerFormSubmit}>
        <div className="form-group col-6">
          <label htmlFor="categoryName" className="d-none">
            Name:
          </label>
          <input
            type="text"
            className="form-control"
            name="name"
            value={categoryLoad.name}
            placeholder="Name..."
            onChange={handlerChange}
          />
        </div>
        <div className="form-group col-6">
          <label htmlFor="categoryDescription">Description:</label>
          <textarea
            className="form-control"
            name="description"
            value={categoryLoad.description}
            rows="3"
            onChange={handlerChange}
          ></textarea>
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          data-toggle="modal"
          data-target="#modalCreateCat"
        >
          Submit
        </button>
        <Link to="/dashboard/category/list">
          <button className="btn btn-danger ml-2">Back</button>
        </Link>
      </form>
      {/* <!-- Modal --> */}
      <div
        class="modal"
        id="modalCreateCat"
        tabindex="-1"
        role="dialog"
        aria-labelledby="modalCreateCatLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="modalCreateCatLabel">
                Categories
              </h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">Category created</div>
            <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-primary"
                  data-dismiss="modal"
                  onClick={()=>window.location.reload()}
                >
                  OK
                </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardLoadCategory;
