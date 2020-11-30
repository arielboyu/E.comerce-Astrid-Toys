import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useSelector } from "react-redux";
const getProduct = axios.get(`${process.env.REACT_APP_API_URL}/products`);

const DashboardUpdateProduct = () => {
  const [product, setProduct] = useState([]);
  const user = useSelector((state) => state.user);
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
    <div className="firstContainer container d-flex flex-column text-center col-12 col-md-12 col-lg-10 col-xl-8 mx-auto my-5 p-5 border shadow">
      <h1 class="display-3 d-none d-sm-block">
          Products
      </h1>
      <div
        className="mx-auto rounded mb-5"
        style={{
          backgroundImage:
            "url(https://img.unocero.com/2019/11/funko-pop-geek-barato.jpg)",
          width: "95%",
          height: "300px",
        }}
      >
        
        <hr class="my-2" />
        <p class="lead"></p>
      </div>
      <div className="col-12 d-flex justify-content-center pb-4">
        <Link to="/dashboard/product/create">
          <button className="btn btn-danger btn-lg d-flex align-items-center ml-auto mb-3">
            <ion-icon
              style={{ fontSize: "24px" }}
              name="add-circle-outline"
            ></ion-icon>{" "}
            Add Product
          </button>
        </Link>
      </div>
      <table className="table table-reflow mx-auto mb-5">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Description</th>
            <th>Price</th>
            <th>Stock</th>
            <th>Active</th>
            <th>Update</th>
            <th>Activation</th>
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
                  <button className="btn btn-danger">Update</button>
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
      <Link to="/dashboard" >
            <button className="btn btn-danger mt-5 w-25" >
              BACK
            </button>
      </Link>
    </div>
  );
};

export default DashboardUpdateProduct;
