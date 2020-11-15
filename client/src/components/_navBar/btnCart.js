import React from "react";
import {Link} from "react-router-dom";

export default function Cart() {
  return (
      <Link to="/cart" className="nav-link d-flex">
        <div className="mr-1">
          <i className="fas fa-shopping-cart "></i>
        </div>
        <div>
          Cart
        </div>
      </Link>
  );
}
