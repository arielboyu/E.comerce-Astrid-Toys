import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import axios from "axios";
import { Redirect } from "react-router-dom";
import Spinner from "../Spinner/spinner";

const validation = axios.get(`${process.env.REACT_APP_API_URL}/auth/me`, {
  withCredentials: true,
});

const Dashboard = () => {
  const [redirect, setRedirect] = useState(false);
  const [load, setLoad] = useState(true);
  const user = useSelector((state) => state.user);

  useEffect(() => {
    setRedirect(false);
    console.log("load: ",load);

    setTimeout(() => {
        axios.get(`${process.env.REACT_APP_API_URL}/auth/me`, {
            withCredentials: true,
          })
        .then((r) => {
          console.log("Estas logueado!");
          if(r.data){
            console.log(r.data);
            if (user.isAdmin) {
                console.log("sos admin - seteo redirect en false")
                setRedirect(false)
                setLoad(false);
            }else{
                console.log("NO sos admin - seteo redirect en true")
                setRedirect(true)
            }
          }else{
            console.log("NO EXISTE USER - seteo redirect en TRUE")
            setRedirect(true)
          }
        })
        .catch((err) => {
          console.log("ERROR: ",err);
/*           if (user.isAdmin) {
            console.log("sos admin catch seteo redirect en false por catch")
            setRedirect(false)
            setLoad(false)
        }else{
            console.log("NO sos admin - seteo redirect en true por catch")
            setRedirect(true)
        } */
        });
    }, 2000);
  }, []);

  return (
    <>
      {/* !user.isAdmin ? <Redirect to='/products'/> : null */ }
      { redirect ? <Redirect to='/products'/> : null }
      {load ? (
        <Spinner />
      ) : (
        <div className="firstContainer container d-flex flex-column text-center mx-auto my-5 p-5 border shadow">
          <h1 style={{ background: "white" }} className="display-3 text-center">
            Dashboard
          </h1>
          <div
            style={{ minwidth: "100wh", height: "400px" }}
            className="d-flex flex-column"
          >
            <div
              className="mx-auto"
              style={{
                backgroundImage:
                  "url(https://lh3.googleusercontent.com/proxy/V4UjjDNvjZ-PmR2sOnC1hri1FUk4t5UKQDdd7-9w_xILig_M5XjMv86_hX8PNtgVEbvkrDCDpkD3qmvUvkW-aC0xyD5Kr1oyO63IAxqFYRwRLOIAoKTULfbzoQBjqovs)",
                width: "100%",
                height: "280px",
              }}
            ></div>
            <hr className="my-2" />
            <div className="d-flex justify-content-around px-5 my-auto">
              <Link to="/dashboard/product/list">
                <button className="btn btn-danger btn-lg d-flex align-items-center mx-auto mt-3">
                  <ion-icon
                    style={{ fontSize: "24px" }}
                    name="add-circle-outline"
                  ></ion-icon>{" "}
                  Products
                </button>
              </Link>
              <Link to="/dashboard/category/list">
                <button className="btn btn-danger btn-lg d-flex align-items-center mx-auto mt-3">
                  <ion-icon
                    style={{ fontSize: "24px" }}
                    name="add-circle-outline"
                  ></ion-icon>{" "}
                  Categories
                </button>
              </Link>
              <Link to="/dashboard/orders/list">
                <button className="btn btn-danger btn-lg d-flex align-items-center mx-auto mt-3">
                  <ion-icon
                    style={{ fontSize: "24px" }}
                    name="add-circle-outline"
                  ></ion-icon>{" "}
                  Orders
                </button>
              </Link>
              <Link to="/dashboard/users/list">
                <button className="btn btn-danger btn-lg d-flex align-items-center mx-auto mt-3">
                  <ion-icon
                    style={{ fontSize: "24px" }}
                    name="add-circle-outline"
                  ></ion-icon>{" "}
                  Users
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Dashboard;
