import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="container d-flex flex-column mx-auto my-5 ">
      <h2 className="display-3 text-center">Login</h2>
      <form className="col-sm-12 col-md-8 col-lg-6 mx-auto">
        <div className="form-group ">
          <label htmlFor="user">Name</label>
          <input
            type="text"
            className="form-control"
            name="name"
            // value={productLoad.name}
            // placeholder="Enter your name"
            // onChange={handlerChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="user">Lastname</label>
          <input
            type="text"
            className="form-control"
            name="lastname"
            // value={productLoad.name}
            // placeholder="Enter your name"
            // onChange={handlerChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="user">Email</label>
          <input
            type="email"
            className="form-control"
            name="email"
            // value={productLoad.name}
            // placeholder="Enter your name"
            // onChange={handlerChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="user">Password</label>
          <input
            type="password"
            className="form-control"
            name="password"
            // value={productLoad.name}
            // placeholder="Enter your name"
            // onChange={handlerChange}
          />
        </div>
        <div className="d-flex justify-content-center">
        <button
          type="submit"
          className="btn btn-primary"
          data-toggle="modal"
          data-target="#exampleModal"
        >
          Enter
        </button>
        <Link to="#">
          <button className="btn btn-danger ml-2">Register</button>
        </Link>
        </div>
        {/* <!-- Modal -->
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
                  Products
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
              <div class="modal-body">Added product</div>
              <div class="modal-footer">
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
        </div> */}
      </form>
    </div>
  );
};

export default Login;
