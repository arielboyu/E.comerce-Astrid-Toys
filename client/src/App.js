
/* CSS */
import './index.css'
/* React*/
import React from "react";
import { BrowserRouter as Router, Route, Switch, } from "react-router-dom";
import CategoryList from "./components/_dashboardCategoriesList/categoriesList";
/*Importaciones de componentes*/
import Home from "./components/_home/home.js";
import Cart from "./components/_cart/cart.js";
import AddToCart from "./components/_addToCart/addToCart.js";
import Login from "./components/_login/login.js";
import Register from "./components/_login/register.js";
import Footer from "./components/_footer/footer.js";
import NotFound from "./components/_error/error"
/*Componente Catalogo*/
import Catalogue from "./components/_catalogue/catalogue";
import Product from "./components/_product/product";
/*Componente Navbar*/
import Navbar from "./components/_navBar/nav.js";
import Profile from "./components/_navBar/profile.js"
/*Seccion Dashboard*/
import Dashboard from "./components/_dashboard/dashboard";
import DashboardLoadCategory from "./components/_dashboardLoadCategory/dashboardLoadCategory";
import DashboardLoadProduct from "./components/_dashboardLoadProduct/dashboardLoadProduct";
import DashboardUpdateProduct from "./components/_dashboardUpdateProduct/dashboardUpdateProduct";
import UpdateProduct from "./components/_dashboardUpdateProduct/updateProduct"
import OrderList from "./components/_dashboardTableOrders/orderTable"
import ContainerMyShopping from "./components/_myShopping/containerShop.js"
import UpdateCategories from "./components/_dashboardUpdateCategories/updateCategories"
import UsersList from "./components/_dashboardUsersTable/usersTable"
import OrderListPending from "./components/_dashboardTableOrders/OrderTablePending"
import OrderDetail from "./components/_dashboardOrderDetail/orderDetails"
//****Import de prueba */
import Reduxxx from './components/pruebaRedux'

function App() {
  return (
    <Router>
      <Route path="/" render={({match, location}) => <Navbar match={match} location={location} />} />
        <Switch >
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register}/>
          <Route path="/esta/es/la/ruta/de/rodri">
            <Reduxxx />
          </Route>
          <Route path="/products/category/:cat">
            <Catalogue />
          </Route>
          <Route exact path="/products/id/:index">
            <Product />
          </Route>
          <Route path="/products/?search">
            <Catalogue />
          </Route>
          <Route path="/products">
            <Catalogue />
          </Route>
          <Route exact path="/dashboard" component={Dashboard} />
          <Route path="/dashboard/category/create">
            <DashboardLoadCategory />
          </Route>
          <Route exact path="/dashboard/product/create">
            <DashboardLoadProduct />
          </Route>
          <Route exact path="/profile/:id">
            <Profile />
          </Route>
          <Route exact path="/dashboard/product/update/:id">
            <UpdateProduct />
          </Route>
          <Route exact path="/dashboard/product/update">
            <DashboardUpdateProduct />
          </Route>
          <Route exact path="/dashboard/category/list">
            <CategoryList />
          </Route>
          <Route exact path="/dashboard/category/update/:idcategory">
            <UpdateCategories />
          </Route>
          <Route exact path="/dashboard/orders/list">
            <OrderList />
          </Route>
          <Route exact path="/dashboard/users/list">
            <UsersList />
          </Route>
          <Route exact path="/dashboard/orders/pending">
            <OrderListPending />
          </Route>
          <Route exact path="/dashboard/orders/detail/:idorden">
          <OrderDetail />
        </Route>
          <Route exact path="/cart">
            <Cart />
          </Route>
          <Route exact path="/myshop/:idUser">
            <ContainerMyShopping />
          </Route>
          <Route exact path="/addToCart">
            <AddToCart />
          </Route>
        </Switch>
      <Route path="/" render={({match}) => <Footer match={match} />} />
    </Router>
  );
}
export default App;
