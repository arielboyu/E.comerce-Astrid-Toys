import React, { useState } from "react";
import axios from "axios";
import "./dashboardLoadCategory.module.css"

function DashboardLoadCategory() {
  const [categoryLoad, setCategory] = useState({
    name: "",
    description: "",
    //image ?
  });

  function handlerChange(e) {
    setCategory({ ...categoryLoad, [e.target.name]: e.target.value });
  }

  function handlerFormSubmit(e) {
    axios
      .post("http://localhost:3002/categories/category",categoryLoad)
      .then((response) => {
        return "Categoria Cargada";
      })
      .catch((e) => {
        console.log(e);
      });
  }

  return (
    <div>
      <h2 class="display-4 ">Load Product</h2>
      <form onSubmit={handlerFormSubmit}>
        <div className="form-group col-6">
          <label htmlFor="categoryName" className="d-none">
            Name Category
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
          <label htmlFor="categoryDescription">Description Category</label>
          <textarea
            className="form-control"
            name="description"
            value={categoryLoad.description}
            rows="3"
            onChange={handlerChange}
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary ">
          Submit
        </button>
      </form>
    </div>
  );
}

export default DashboardLoadCategory;
