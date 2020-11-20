import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import BtnDashboard from "../_navBar/btnDashboard";

const getProduct = axios.get(`${process.env.REACT_APP_API_URL}/products`);

const DashboardUpdateProduct = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    getProduct.then((res) => {
      setProduct(res.data);
    });
  }, [product]);

  const changeStateActive = (prod) => {
    axios
      .put(`${process.env.REACT_APP_API_URL}/products/${prod.id}`, {
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
      <div  style={{backgroundImage: "url(https://img.unocero.com/2019/11/funko-pop-geek-barato.jpg)",  width: "100%",
  height: "280px",}} >
        <h1 style={{background:"white"}} class="display-3 d-none d-sm-block">Products</h1>
        <hr class="my-2" />
        <p class="lead">
        </p>
      </div>
      <Link to="/dashboard/product/create">
            <button class="btn btn-danger btn-lg d-flex align-items-center ml-auto mt-3">
            <ion-icon style={{fontSize:"24px"}} name="add-circle-outline"></ion-icon>{" "} Add Product 
            </button>
          </Link>
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
