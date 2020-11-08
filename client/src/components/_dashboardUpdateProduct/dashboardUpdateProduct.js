import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

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
    <div className="container">
      <div class="jumbotron">
        <h1 class="display-3">CRUD Products</h1>
        <p class="lead">
          Si aca quieren poner una description de lo que se hace en el crud... haganloN no me molestaria,,, no se me cae una idea
        </p>
        <hr class="my-2" />
        <p class="lead">
          <Link to="/dashboard/product/create">
            <button class="btn btn-primary btn-lg">
              Add Product <ion-icon style={{fontSize:"24px"}} name="add-circle-outline"></ion-icon>
            </button>
          </Link>
        </p>
      </div>
      <table className="table">
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
                  <button>
                    Update
                  </button>
                </Link>
              </td>
              <td>
                <button
                  onClick={() => {
                    changeStateActive(prod);
                    // window.location.reload();
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
