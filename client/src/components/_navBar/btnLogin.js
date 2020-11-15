import React from "react";
import {Link} from "react-router-dom";

export default function Login() {
  return (
      <Link to="/login" className="nav-link d-flex">
        <div className="mr-1">
          <i className="fas fa-user"> </i>
        </div>
        <div className="">
          Login 
        </div>
      </Link>
  );
}
