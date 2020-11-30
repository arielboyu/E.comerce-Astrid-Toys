import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

export default function UpdateCategories() {
  const [newCategory, setNewCategory] = useState([]);
  const [category, setCategory] = useState([]);
  const getCategory = axios.get(`${process.env.REACT_APP_API_URL}/categories`);
  const user = useSelector((state) => state.user);

 useEffect(() => {
   getCategory.then((res) => {
     setCategory(res.data[0]);
   });
 }, [])

const handlerChange = (e) => {
  setNewCategory({ ...newCategory, [e.target.name]: e.target.value });
};

const handlerSubmit = (e) => {
  axios
    .put(`${process.env.REACT_APP_API_URL}/categories/update/${category.id}`, newCategory)
    .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
      e.preventDefault()
};

  return (
    <div className="firstContainer container">
      {!user.isAdmin ? <Redirect to='/products'/> : null} 
      <h2>Update Category</h2>
      <form onSubmit={handlerSubmit} >
        <div className="form-group">
          <label htmlFor="productName">Category Name</label>
          <input
            type="text"
            className="form-control"
            name="name"
            placeholder="insert Name example 'Series'.. "
            value={newCategory.name}
            onChange={handlerChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="categoryDescription">Category Description</label>
          <textarea
            className="form-control"
            name="description"
            value={newCategory.description}
            placeholder=" insert Category Description.."
            rows="3"
            onChange={handlerChange}
          ></textarea>
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          data-toggle="modal"
          data-target="#exampleModal"
        >
          Submit
        </button>
        <Link to="/dashboard/category/list">
          <button className="btn btn-danger ml-2">Back</button>
        </Link>
        {/* <!-- Modal --> */}
        <div
          class="modal"
          id="exampleModal"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div classN="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Category Update
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
              <div className="modal-body">Confirmated.</div>
              <div className="modal-footer">
                <button
                  type="button"
                  class="btn btn-primary"
                  data-dismiss="modal"
                  onClick={() => window.location.reload()}
                >
                  Ok
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
