import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import BtnDashboard from "../_navBar/btnDashboard";

const getProduct = axios.get("http://localhost:3002/products");

const DashboardUpdateProduct = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    getProduct.then((res) => {
      setProduct(res.data);
    });
  }, [product]);

  const changeStateActive = (prod) => {
    axios
      .put(`http://localhost:3002/products/${prod.id}`, {
        active: !prod.active,
      })
      .then((r) => {
        console.log(r);
      })
      .catch((er) => {
        console.log(er);
      });
  };

  return (
    <div className="d-flex flex-column text-center col-12 col-md-12 col-lg-10 col-xl-8 mx-auto my-5 p-5 border shadow">
      <div>
        <h1 class="display-3 d-none d-sm-block">CRUD Products</h1>
        <p class="lead d-none d-sm-block">
        In this section the administrator can modify the products
        </p>
        <hr class="my-2" />
        <p class="lead">
          <Link to="/dashboard/product/create">
            <button class="btn btn-danger btn-lg d-flex align-items-center mx-auto mt-3">
            <ion-icon style={{fontSize:"24px"}} name="add-circle-outline"></ion-icon>{" "} Add Product 
            </button>
          </Link>
        </p>
      </div>
      <table className="table table-reflow w-75 mx-auto mb-5">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Description</th>
            <th>Price</th>
            <th>Stock</th>
            <th>Active</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {product.map((prod) => (
            <tr>
              <th scope="row">{prod.id}</th>
              <td>{prod.name}</td>
              <td>{prod.description}</td>
              <td>{prod.price}</td>
              <td>{prod.stock}</td>
              <td>{prod.active.toString()}</td>
              <td>
                <Link to={`/dashboard/product/update/${prod.id}`}>
                  <button className="btn btn-danger">
                    Update
                  </button>
                </Link>
              </td>
              <td>
                <button
                  className="btn btn-dark"
                  onClick={() => {
                    changeStateActive(prod);
                    window.location.reload();
                  }}
                >
                  {prod.active ? "Desactive" : "Active"}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DashboardUpdateProduct;
