import React from "react";
import {Link} from "react-router-dom";

export default function Login() {
  return (
    <Link to="/login" className="text-decoration-none mr-2">
      <button className="btn btn-outline-dark">
        Login
      </button>
    </Link>
  );
}
