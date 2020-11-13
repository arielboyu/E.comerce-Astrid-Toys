import React from "react";
import {Link} from "react-router-dom";

export default function Cart() {
  return (
    <Link to="/cart" className="text-decoration-none mr-4">
      <button className="dropbtn bg-dark"><i class="fas fa-shopping-cart"></i> Cart</button>
    </Link>
  );
}
