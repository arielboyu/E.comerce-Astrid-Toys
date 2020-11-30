import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import axios from "axios";
import Spinner from "../Spinner/spinner";

const Dashboard = () => {
  const [load, setLoad] = useState(true);
  const user = useSelector((state) => state.user);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/auth/me`, {
        withCredentials: true,
      })
      .then((r) => {
        console.log("Estas logueado!");
        console.log(r.data);
        setLoad(false);
      })
      .catch((err) => {
        console.log("No estas logueado");
      });
  }, []);

  return (
    <>
      {load ? (
        <Spinner />
      ) : (
        <div className="firstContainer container d-flex flex-column text-center mx-auto my-5 p-5 border shadow">
          <h1 className="display-3 text-center">
            Dashboard
          </h1>
          <hr className="my-2" />
          <div className="d-flex flex-column px-5 my-auto">
            <Link to="/dashboard/product/list">
              <button className="btn btn-danger btn-lg d-flex align-items-center mx-auto w-50 text-center ">
                <ion-icon
                  style={{ fontSize: "24px" }}
                  name="add-circle-outline"
                ></ion-icon>
                Products
              </button>
            </Link>
            <Link to="/dashboard/category/list">
              <button className="btn btn-danger btn-lg d-flex align-items-center mx-auto w-50 text-center mt-5">
                <ion-icon
                  style={{ fontSize: "24px" }}
                  name="add-circle-outline"
                ></ion-icon>{" "}
                Categories
              </button>
            </Link>
            <Link to="/dashboard/orders/list">
              <button className="btn btn-danger btn-lg d-flex align-items-center mx-auto w-50 text-center mt-5">
                <ion-icon
                  style={{ fontSize: "24px" }}
                  name="add-circle-outline"
                ></ion-icon>{" "}
                Orders
              </button>
            </Link>
            <Link to="/dashboard/users/list">
              <button className="btn btn-danger btn-lg d-flex align-items-center mx-auto w-50 text-center mt-5">
                <ion-icon
                  style={{ fontSize: "24px" }}
                  name="add-circle-outline"
                ></ion-icon>{" "}
                Users
              </button>
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Dashboard;
