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
          />
        </div>
        <div className="form-group">
          <label htmlFor="user">Lastname</label>
          <input
            type="text"
            className="form-control"
            name="lastname"
          />
        </div>
        <div className="form-group">
          <label htmlFor="user">Email</label>
          <input
            type="email"
            className="form-control"
            name="email"
          />
        </div>
        <div className="form-group">
          <label htmlFor="user">Password</label>
          <input
            type="password"
            className="form-control"
            name="password"
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
      </form>
    </div>
  );
};

export default Login;
