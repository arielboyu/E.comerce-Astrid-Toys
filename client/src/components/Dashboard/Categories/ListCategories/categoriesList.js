import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const getCategory = axios.get(`${process.env.REACT_APP_API_URL}/categories`);
export default function CategoriesList() {
  const [category, setCategory] = useState([]);
  const [deleted, setDeleted] = useState(null);
  const user = useSelector((state) => state.user);
  useEffect(() => {
    getCategory.then((res) => {
      console.log(category);
      setCategory(res.data);
      console.log(res);
    });
  }, []);

  // esta funcion elimina la categoria seteada en el estado local
  const handleDelete = () => {
    axios
      .delete(
        `${process.env.REACT_APP_API_URL}/categories/delete/${deleted.id}`,
        deleted
      )
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
    <div className="firstContainer container d-flex flex-column text-center mx-auto my-5 p-5 border shadow">
      <h1 className="display-3 text-center mb-2"> Categories </h1>
      <div style={{ backgroundImage: "url(https://www.wallpapertip.com/wmimgs/30-302870_funko-pop-wallpaper-hd.jpg)", backgroundSize: "cover", backgroundRepeat: "no-repeat", width: "95%", height: "300px" }} className="mb-5 rounded mx-auto" >
        <hr className="my-2" />
        <p className="lead "></p>
      </div>
      <div className="col-12 d-flex justify-content-center pb-4">
        <Link to="/dashboard/category/create">
          <button className="btn btn-danger btn-lg d-flex align-items-center mx-auto mb-3">
            <ion-icon
              style={{ fontSize: "24px" }}
              name="add-circle-outline"
            ></ion-icon>{" "}
            Add Category
          </button>
        </Link>
      </div>
      <table className="table table-reflow  mx-auto mb-5">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Description</th>
            <th>Update</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {category.map((c) => (
            <tr key={c.id}>
              <td>{c.id}</td>
              <td>{c.name}</td>
              <td>{c.description}</td>
              <td>
                <Link to={`/dashboard/category/update/${c.id}`}>
                  <button className="btn btn-danger">
                    Update <ion-icon name="reload-circle-sharp"></ion-icon>{" "}
                  </button>
                </Link>
              </td>
              <td>
                <button
                  onClick={() => handleSubmit(c)}
                  type="submit"
                  className="btn btn-dark"
                  data-toggle="modal"
                  data-target="#exampleModal"
                >
                  Delete <ion-icon name="trash-sharp"></ion-icon>
                </button>
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
  );
}
