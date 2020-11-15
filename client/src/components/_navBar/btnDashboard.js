import React from 'react';
import { Link } from 'react-router-dom';

const BtnDashboard = ({location}) => {
    return (
        ( location.pathname.slice(0, 10) === "/dashboard") ?
        <>
        <Link to="/dashboard" className="d-flex nav-link">
        <div className="mr-1">
        <i class="far fa-calendar-alt"></i>
        </div>
        <div className="">
          Dashboard
        </div>
        </Link>
        {/* <Link to="/dashboard/product/update">Products</Link>
        <Link to="/dashboard/category/list">Categories</Link>
        <Link to="/dashboard/users/list">Orders</Link> */}

      </> :
      <></>
    )
}

export default BtnDashboard;