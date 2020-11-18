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
/*Componente Catalogo*/
import Catalogue from "./components/_catalogue/catalogue";
import Product from "./components/_product/product";
/*Componente Navbar*/
import Navbar from "./components/_navBar/navBar";
/*Seccion Dashboard*/
import Dashboard from "./components/_dashboard/dashboard";
import DashboardLoadCategory from "./components/_dashboardLoadCategory/dashboardLoadCategory";
import DashboardLoadProduct from "./components/_dashboardLoadProduct/dashboardLoadProduct";
import DashboardUpdateProduct from "./components/_dashboardUpdateProduct/dashboardUpdateProduct";
import UpdateProduct from "./components/_dashboardUpdateProduct/updateProduct"
import OrderList from "./components/_dashboardTableOrders/orderTable"
import ContainerMyShopping from "./components/_myShopping/containerShop.js"
import OrderDetail from "./components/_dashboardOrderDetail/orderDetails"
import UpdateCategories from "./components/_dashboardUpdateCategories/updateCategories"
//****Import de prueba */
import Reduxxx from './components/pruebaRedux'
import OrderListPending from "./components/_dashboardTableOrders/OrderTablePending"


function App() {
  return (
    <Router>
      <Route path="/" render={({match, location}) => <Navbar match={match} location={location} />} />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register}/>
        <Route path="/esta/es/la/ruta/de/rodri">
          <Reduxxx />
        </Route>
        <Route path="/products/category/nav/:cat">
          <Catalogue />
        </Route>
        <Route exact path="/products/id/:index">
          <Product />
        </Route>
        <Route path="/products/category/">
          <Catalogue />
        </Route>
        <Route path="/products?search">
          <Catalogue />
        </Route>
        <Route path="/products">
          <Catalogue />
        </Route>
        <Route exact path="/dashboard" component={Dashboard} />
        <Route path="/dashboard/category/create">
          <DashboardLoadCategory />
        </Route>
        <Route path="/dashboard/product/create">
          <DashboardLoadProduct />
        </Route>
        <Route path="/dashboard/product/update/:id">
          <UpdateProduct />
        </Route>
        <Route path="/dashboard/product/update">
          <DashboardUpdateProduct />
        </Route>
        <Route path="/dashboard/category/list">
          <CategoryList />
        </Route>
        <Route path="/dashboard/category/update/:idcategory">
          <UpdateCategories />
        </Route>
        <Route path="/dashboard/users/list">
          <OrderList />
        </Route>
        <Route path="/dashboard/orders/detail/:idorden">
          <OrderDetail />
        </Route>
        <Route path="/dashboard/orders/list/pending">
          <OrderListPending />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>{" "}
        <Route exact path="/myshop/:idUser">
          <ContainerMyShopping />
        </Route>
        <Route path="/addToCart">
          <AddToCart />
        </Route>
      </Switch>
      <Route path="/" render={({match}) => <Footer match={match} />} />
    </Router>
  );
}
export default App;
