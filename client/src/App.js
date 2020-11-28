
/* CSS */
import './index.css'
/* React*/
import React from "react";
import { BrowserRouter as Router, Route, Switch, } from "react-router-dom";
import CategoryList from "./components/Dashboard/Categories/ListCategories/categoriesList";
/* General Components*/
import Home from "./components/Sections/Home/home.js";
import Footer from "./components/Sections/Footer/footer.js";
import NotFound from "./components/Sections/Error/error"
import Navbar from "./components/NavBar/nav.js";
import About from "./components/About/about.js";
/* Profile */
import Profile from "./components/Profile/profile.js"
import Login from "./components/Profile/Login/login.js";
import Register from "./components/Profile/Register/register.js";
import ContainerMyShopping from "./components/Profile/MyShopping/containerShop.js"
/* Catalogue */
import Catalogue from "./components/Catalogue/catalogue";
import Product from "./components/Catalogue/ProductDetail/product";
import Cart from "./components/Cart/cart.js";
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
import DashboardOrderListCancel from "./components/Dashboard/Orders/Orders/orderCancel"
import DashboardOrderListPending from "./components/Dashboard/Orders/Orders/orderTablePending"
import DashboardOrderListComplete from "./components/Dashboard/Orders/Orders/orderComplete"
/* Dashboard Categories */
import DashboardLoadCategory from "./components/Dashboard/Categories/LoadCategory/loadCategory";
import DashboardUpdateCategories from "./components/Dashboard/Categories/UpdateCategories/updateCategories";
/* Utils */
import { useSelector } from 'react-redux';


function App() {
  const user = useSelector(state => state.user);

  return (
    <Router>
      <Route path="/" render={({match, location}) => <Navbar match={match} location={location} />} />
        
        <Switch >
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />

          {/* USER COMPONENTS */}
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register}/>
          <Route exact path="/profile/:id" component={Profile} />
          <Route exact path="/myshop/:idUser" component={ContainerMyShopping} />

          {/* CATALOGUE COMPONENTS */}
          <Route exact path="/products/id/:index" component={Product} />
          <Route exact path="/products/category/:cat" component={Catalogue} />            
          <Route exact path="/products/?search" component={Catalogue} />
          <Route path="/products" component={Catalogue} />
          <Route exact path="/cart" component={Cart} />      

          {/* DASHBOARD COMPONENTS */}
          <Route exact path='/dashboard' component={ user.isAdmin ? Dashboard : NotFound} />

          <Route exact path="/dashboard/product/list" component={ user.isAdmin ? DashboardListProducts : NotFound } />
          <Route exact path="/dashboard/product/create" component={ user.isAdmin ? DashboardLoadProducts : NotFound } />
          <Route exact path="/dashboard/product/update/:id" component={ user.isAdmin ? DashboardUpdateProducts : NotFound} />
          
          <Route exact path="/dashboard/category/list" component={ user.isAdmin ? CategoryList : NotFound } />
          <Route exact path="/dashboard/category/create" component={ user.isAdmin ? DashboardLoadCategory : NotFound} />
          <Route exact path="/dashboard/category/update/:idcategory" component={ user.isAdmin ? DashboardUpdateCategories : NotFound } />

          <Route exact path="/dashboard/orders/list" component={ user.isAdmin ? DashboardOrderList : NotFound } />
          <Route exact path="/dashboard/orders/list/cancel" component={ user.isAdmin ? DashboardOrderListCancel : NotFound } />
          <Route exact path="/dashboard/orders/list/pending" component={ user.isAdmin ? DashboardOrderListPending : NotFound } />
          <Route exact path="/dashboard/orders/list/complete" component={ user.isAdmin ? DashboardOrderListComplete : NotFound } />
          <Route exact path="/dashboard/orders/detail/:idorden" component={ user.isAdmin ? DashboardOrderDetail : NotFound } />

          <Route exact path="/dashboard/users/list"  component={ user.isAdmin ? DashboardUsersList : NotFound } />
          
        </Switch>
      <Route path="/" render={({match}) => <Footer match={match} />} />
    </Router>
  );
}

export default App;
