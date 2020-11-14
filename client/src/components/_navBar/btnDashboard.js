import React from 'react';
import { Link } from 'react-router-dom';

const BtnDashboard = ({location}) => {
    return (
        ( location.pathname.slice(0, 10) === "/dashboard") ?
        <>
        <div className="dropdown d-none d-lg-block mr-lg-5">
        <button className="dropbtn bg-dark">Dashboard</button>
        <div className="dropdown-content">
          <Link to="/dashboard/product/update">Products</Link>
          <Link to="/dashboard/category/list">Categories</Link>
          <Link to="/dashboard/users/list">Orders</Link>
        </div>
      </div>
      </> :
      <></>
    )
}

export default BtnDashboard;