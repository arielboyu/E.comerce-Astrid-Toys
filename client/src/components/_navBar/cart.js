import React from "react";
import {Link} from "react-router-dom";

export default function Cart() {
  return (
    <Link to="/cart" className="text-decoration-none mr-2">
      <button className="btn btn-outline-dark">
      Cart
      </button>
    </Link>
  );
}
