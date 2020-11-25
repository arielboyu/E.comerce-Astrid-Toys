
/* CSS */
import './index.css'
/* React*/
import React from "react";
import { BrowserRouter as Router, Route, Switch, } from "react-router-dom";
import CategoryList from "./components/Dashboard/Categories/ListCategories/categoriesList";
/*Importaciones de componentes*/
import Home from "./components/Sections/Home/home.js";
import Footer from "./components/Sections/Footer/footer.js";
import NotFound from "./components/Sections/Error/error"
import Navbar from "./components/NavBar/nav.js";
import About from "./components/About/about.js";
/* Import de Profile */
import Profile from "./components/Profile/profile.js"
import Login from "./components/Profile/Login/login.js";
import Register from "./components/Profile/Register/register.js";
import Cart from "./components/Cart/cart.js";
import ContainerMyShopping from "./components/Profile/MyShopping/containerShop.js"
/*Componente Catalogo*/
import Catalogue from "./components/Catalogue/catalogue";
import Product from "./components/Catalogue/ProductDetail/product";
import AddToCart from "./components/Catalogue/AddToCart/addToCart.js";
/* Dashboard Users*/
import Dashboard from "./components/Dashboard/dashboard";
import DashboardUsersList from "./components/Dashboard/Users/listUsers";
/* Dashboard Products */
import DashboardUpdateProducts from "./components/Dashboard/Products/updateProduct";
import DashboardListProducts from "./components/Dashboard/Products/listProduct";
import DashboardLoadProducts from "./components/Dashboard/Products/loadProduct";
/* Dashboard Orders*/
import DashboardOrderList from "./components/Dashboard/Orders/Orders/orderTable";
import DashboardOrderDetail from "./components/Dashboard/Orders/OrderDetail/orderDetails";
/* Dashboard Categories */
import DashboardLoadCategory from "./components/Dashboard/Categories/LoadCategory/loadCategory";
import DashboardUpdateCategories from "./components/Dashboard/Categories/UpdateCategories/updateCategories";
/*Import de prueba */
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
          <Route exact path="/profile/:id">
            <Profile />
          </Route>
          <Route exact path="/dashboard/product/update/:id">
          <DashboardUpdateProducts />
          
          </Route>
          <Route exact path="/dashboard/product/list">
          <DashboardListProducts />
            
          </Route>
          <Route exact path="/dashboard/product/create">
            <DashboardLoadProducts />
          </Route>
          <Route exact path="/dashboard/category/list">
            <CategoryList />
          </Route>
          <Route exact path="/dashboard/category/update/:idcategory">
            <DashboardUpdateCategories />
          </Route>
          <Route exact path="/dashboard/orders/list">
            <DashboardOrderList />
          </Route>
          <Route exact path="/dashboard/users/list">
            <DashboardUsersList />
          </Route>
          <Route exact path="/dashboard/orders/detail/:idorden">
          <DashboardOrderDetail />
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
          <Route exact path="/about">
            <About />
          </Route>
        </Switch>
      <Route path="/" render={({match}) => <Footer match={match} />} />
    </Router>
  );
}
export default App;
