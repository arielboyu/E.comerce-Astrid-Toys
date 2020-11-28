// ---------- REACT ----------
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
// ---------- STYLE ----------
import style from "./navBar.module.css";
// ---------- REDUX ----------
import { useDispatch, useSelector } from "react-redux";
import {
  userLogin,
  userLogOut,
  setCategories,
  setCart,
  addToCart,
  removeAllProductsToCart
} from "../../redux/actions/actions.js";
// ---------- UTILS ----------
import axios from "axios";

export default function Nav({ match }) {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const cart = useSelector((state) => state.carrito);
  const [open, setOpen] = useState(false);
  const locationCart = useLocation().pathname === "/cart" ? true : false;

  const clearUser = () => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/auth/logout`, {
        withCredentials: true,
      })
      .then((r) => {
        dispatch(userLogOut());
        dispatch(removeAllProductsToCart())
        //no hay otra forma que no sea utilizando reload (nico)
        window.location.reload()
        
      })
      .catch((error) => {
        console.log(error);
      });
    dispatch(userLogOut());
  };

  const getUser = () => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/auth/me`, {
        withCredentials: true,
      })
      .then((user) => {
        dispatch(userLogin(user.data));
      })
      .catch((err) => console.log(err));
  };



  useEffect(() => {
    getUser();
  }, []);

  function Navbar(props) {
    return (
      <nav className={style.navbar}>
        <ul className={style.navbarNav}> {props.children} </ul>
      </nav>
    );
  }

  function NavItem(props) {
    const handlerClick = () => {
      if (props.active === "true") {
        setOpen(!open);
      }
    };
    return (
      <li className={style.navItem}>
        <Link to={props.link}>
          <span className={style.iconButton} onClick={handlerClick}>
            {props.icon}
          </span>
        </Link>
        {open && props.children}
      </li>
    );
  }

  function DropdownItem(props) {
    return (
      <Link to={props.link}>
        <span className={style.menuItem} onClick={props.action}>
          {/* <span className={style.iconButton}>{props.leftIcon}</span> */}
          <span className="ml-auto">{props.children}</span>
          <span className={style.iconRight}>{props.rightIcon}</span>
        </span>
      </Link>
    );
  }

  function DropdownUser() {
    return (
      <div className={style.dropdownUser}>
        <div className={style.menu}>
          <DropdownItem
            rightIcon={<i class="fas fa-user"></i>}
            link={`/profile/${user.id}`}
          >
            Profile
          </DropdownItem>

          <DropdownItem
            rightIcon={<i class="fas fa-shopping-basket"></i>}
            link={`/myshop/${user.id}`}
          >
            My Shop
          </DropdownItem>

          <DropdownItem
            rightIcon={<i class="fas fa-sign-out-alt"></i>}
            link="#"
            action={clearUser}
          >
            Logout
          </DropdownItem>
        </div>
      </div>
    );
  }

  function PageTitle() {
    return (
      <>
        <h1 className={`${style.title} d-none d-lg-block mr-auto my-auto`}>
          <Link to="/"> Astrid Toys </Link>
        </h1>
        <h5 className={`${style.title} d-block d-lg-none mr-auto my-auto`}>
          <Link to="/"> A. Toys </Link>
        </h5>
      </>
    );
  }

  function CartAlert() {
    return (
      <h1 className={`${style.cartAlert} my-auto`}>
        <Link to="/cart"> {cart.length} </Link>
      </h1>
    );
  }

  return !match.isExact ? (
    <Navbar>
      <PageTitle />

      <>
        <Link className="my-auto" to="/products">
          <span className={`${style.navItem} d-none d-md-flex my-auto`}>
            Products
          </span>
        </Link>
        <NavItem
          link="/products"
          icon={<ion-icon size="large" name="bag-outline"></ion-icon>}
        />
      </>

      {user.isAdmin ? (
        <>
          <Link className="my-auto" to="/dashboard">
            <span className={`${style.navItem} d-none d-md-flex my-auto ml-2`}>
              Dashboard
            </span>
          </Link>
          <span className="d-md-flex my-auto">
            <NavItem
              link="/dashboard"
              icon={<ion-icon size="large" name="list"></ion-icon>}
            />
          </span>
        </>
      ) : (
        <></>
      )}
      {user.id ? (
        <>
          <Link className="my-auto" to={`/profile/${user.id}`}>
            <span className={`${style.navUser} d-none d-md-flex mr-n2`}>
              {user.name}
            </span>
          </Link>
          <NavItem
            link="#"
            icon={
              <ion-icon size="large" name="person-circle-outline"></ion-icon>
            }
            active="true"
          >
            <DropdownUser />
          </NavItem>
        </>
      ) : (
        <>
          <Link className="my-auto" to="/login">
            <span className={`${style.navItem} d-none d-md-flex mr-md-n3`}>
              Log in
            </span>
          </Link>
          <NavItem
            link="/login"
            icon={<ion-icon size="large" name="log-in-outline"></ion-icon>}
          />
        </>
      )}

      <>
        <Link className="my-auto" to="/cart">
          <span
            className={`${style.navItem} d-none d-md-flex my-auto ml-md-n3 mr-md-n3`}
          >
            Cart
          </span>
        </Link>
        <NavItem
          link="/cart"
          icon={<ion-icon size="large" name="cart-outline"></ion-icon>}
        />
        {cart.length && <CartAlert />}
      </>
    </Navbar>
  ) : (
    <></>
  );
}
