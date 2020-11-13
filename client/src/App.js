import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import CategoryList from "./components/_dashboardCategoriesList/categoriesList";
/*Importaciones de componentes*/
import Home from "./components/_home/home.js";
import Cart from "./components/_cart/cart.js";
import AddToCart from "./components/_addToCart/addToCart.js";
import Login from "./components/_login/login.js";
import Register from "./components/_login/register.js"
import Footer from "./components/_footer/footer.js";
/*Componente Catalogo*/
import Catalogue from "./components/_catalogue/catalogue";
/*Componente Navbar*/
import Navbar from "./components/_navBar/navBar";
import Product from "./components/_product/product";
import DashboardLoadCategory from "./components/_dashboardLoadCategory/dashboardLoadCategory";
import DashboardLoadProduct from "./components/_dashboardLoadProduct/dashboardLoadProduct";
import DashboardUpdateProduct from "./components/_dashboardUpdateProduct/dashboardUpdateProduct";
import UpdateProduct from "./components/_dashboardUpdateProduct/updateProduct"
import OrderList from "./components/_dashboardTableOrders/orderTable"
function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register}/>
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
        <Route path="/dashboard/users/list">
          <OrderList />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
        <Route path="/addToCart">
          <AddToCart />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}
export default App;