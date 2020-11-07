import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  useParams,
} from "react-router-dom";

/*Importaciones de componentes*/
/*Componente Catalogo*/
import Catalogue from "./components/_catalogue/catalogue";
/*Componente Navbar*/
import Navbar from "./components/_navBar/navBar";
import Product from "./components/_product/product";
import DashboardLoadCategory from "./components/_dashboardLoadCategory/dashboardLoadCategory";
import DashboardLoadProduct from "./components/_dashboardLoadProduct/dashboardLoadProduct"
import DashboardUpdateProduct from "./components/_dashboardUpdateProduct/dashboardUpdateProduct"

const getProduct = axios.get("http://localhost:3002/products/actives");
const getCategory = axios.get("http://localhost:3002/categories");

function App() {
  const [product, setProduct] = useState([]);
  const [category, setCategory] = useState([]);

  useEffect(() => {
    console.log(product);
    console.log(category);
    getProduct.then((res) => {
      setProduct(res.data);
    });
    getCategory.then((res) => {
      setCategory(res.data);
    });
  }, [product, category]);

  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/products/:index">
          <Product />
        </Route>
        <Route path="/products">
          <Catalogue product={product} category={category} />
        </Route>
        <Route path="/dashboard/category/create">
          <DashboardLoadCategory />
        </Route>
        <Route path="/dashboard/product/create">
          <DashboardLoadProduct/>
        </Route>
        <Route path="/dashboard/product/update">
          <DashboardUpdateProduct/>
        </Route>
      </Switch> 
    </Router>
  );
}

export default App;
