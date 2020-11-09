import React from "react";
import {Link} from "react-router-dom";

export default function Cart() {
  return (
    <button className="btn btn-outline-info mr-1 col-xs-6 col-sm-6 col-md-2 col-lg-2 col-xl-1">
    <Link to="/cart" className="text-decoration-none text-dark">Cart</Link>
    </button>
  );
}
