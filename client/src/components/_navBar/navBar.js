import React, { useEffect, useState, useLocation } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import style from "./navBar.css";
import { Navbar } from "reactstrap";
import Dashboard from "./btnDashboard";
import Login from "./btnLogin";
import Cart from "./btnCart";
import { useDispatch, useSelector } from "react-redux";
import { userLogin } from "../../redux/actions/actions";

const getCategory = axios.get(`${process.env.REACT_APP_API_URL}/categories`,{
  withCredentials: true
});

export default function NavBar({ match, location }) {
  const [categories, setCategories] = useState([]);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    getCategory.then((r) => {
      setCategories(r.data);
    });
  }, []);

  const handleLogOut = () => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/auth/logout`)
      .then((r) => {
        dispatch(userLogin(null));
        console.log(r.data);
      })
      .catch((error) => console.log(error));
  };

  return !match.isExact ? (
    <nav className="navbar navbar-expand-lg navbar-light bg-warning pt-2 pb-0 d-flex justify-content-between">
      <h1
        id="title"
        className="col-10 col-lg-3 d-flex justify-content-center pl-5 ml-3 pl-lg-4 ml-lg-1 justify-content-lg-start py-4"
      >
        <Link className="text-dark" to="/">
          Astrid Toys
        </Link>
      </h1>

      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarTogglerDemo03"
        aria-controls="navbarTogglerDemo03"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
        <ul className="navbar-nav ml-auto mr-4 pr-1 pt-3 mt-2 mt-lg-0">
          <li className="nav-item d-block d-lg-none ml-1">
            <Login></Login>
          </li>
          <li className="nav-item d-block d-lg-none ml-1">
            <Dashboard match={match} location={location} />
          </li>
          <li className="nav-item d-block d-lg-none">
            <Cart></Cart>
          </li>
          <li className="nav-item d-block d-lg-none border-top pt-3 mt-3 border-dark ml-1">
            <Link to="/products" className="nav-link">
              <i class="fas fa-bahai"></i> Catalogue
            </Link>
          </li>

          <li className="nav-item d-none d-lg-block">
            <Link to="/myshop/1" className="nav-link">
              My Shop
            </Link>
          </li>

          <li className="nav-item d-none d-lg-block">
            <Link to="/products" className="nav-link">
              Catalogue
            </Link>
          </li>
          <li className="nav-item">
            <p className="nav-link d-none d-lg-block"> | </p>
          </li>

          <li className="nav-item">
            <p className="nav-link mb-0 d-block d-lg-none">
              <i class="fas fa-list ml-1"></i> Categories
            </p>
          </li>

          {/* categories.map((cat) => (
            <li className="nav-item">
              <Link className="nav-link ml-4 ml-lg-0" to={`/products/category/nav/${cat.name.toLowerCase()}`}>
                <i class="fas fa-angle-right d-inline d-lg-none"></i> {cat.name}
              </Link>
            </li> )) */}
          <li>
            <div class="btn-group">
              <span
                class="nav-link btn btn-warning dropdown-toggle"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Categorias
              </span>
              <div className="dropdown-menu">
                {categories.map((cat) => (
                  <Link
                    className="nav-link ml-4 ml-lg-0"
                    to={`/products/category/nav/${cat.name.toLowerCase()}`}
                  >
                    <p className="dropdown-item nav-item d-none d-lg-block">
                      {cat.name}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </li>

          <li className="nav-item text-decoration-none">
            <p className="nav-link d-none d-lg-block"> | </p>
          </li>

          <li className="nav-item d-none d-lg-block">
            <Dashboard match={match} location={location} />
          </li>

          {/* LOG IN */}
          {user.id ? (
            <>
              <li className="nav-item d-flex">
                <Link to="/cart">
                  <span className="nav-link mr-n2">
                    <i className="fas fa-user"> </i> {user.name}{" "}
                  </span>
                </Link>
                <Link onClick={handleLogOut} className="nav-link ml-n1" to="#">
                  (X)
                </Link>
              </li>
            </>
          ) : (
            <li className="nav-item d-none d-lg-block">
              <Login></Login>
            </li>
          )}
          <li className="nav-item d-none d-lg-block">
            <Cart></Cart>
          </li>
        </ul>
      </div>
    </nav>
  ) : (
    <></>
  );
}
