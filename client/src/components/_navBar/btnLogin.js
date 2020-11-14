import React from "react";
import {Link} from "react-router-dom";

export default function Login() {
  return (
    <Link to="/login" className="text-decoration-none">
      <button className="dropbtn bg-dark ">
      <i class="fas fa-user"></i>  Login 
      </button>
    </Link>
  );
}
