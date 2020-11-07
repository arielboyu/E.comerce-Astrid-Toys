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
<<<<<<< HEAD
import Navbar from './components/_navBar/navBar'
import Product from './components/_product/product';
import DashboardLoadProduct from './components/_dashboardLoadProduct/dashboardLoadProduct';

=======
import Navbar from "./components/_navBar/navBar";
import Product from "./components/_product/product";
import DashboardLoadCategory from "./components/_dashboardLoadCategory/dashboardLoadCategory";
>>>>>>> c32cac90f16483b6713d0d564be3b9c6060e121a

const getProduct = axios.get("http://localhost:3002/products");
const getCategory = axios.get("http://localhost:3002/categories");

function App() {
<<<<<<< HEAD
  const [product, setProduct]= useState([]);
  const [category, setCategory]= useState([]);


  useEffect(()=>{
    getProduct.then((res)=>{
      setProduct(res.data)
    })
    getCategory.then((res)=>{
      setCategory(res.data)
    })
  },[product, category])
=======
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
>>>>>>> c32cac90f16483b6713d0d564be3b9c6060e121a

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
        <Route path="/categories">
          <DashboardLoadCategory />
        </Route>
<<<<<<< HEAD
        <Route path="/dashboard/product/create">
          <DashboardLoadProduct/>
        </Route>
      </Switch> 
=======
      </Switch>
>>>>>>> c32cac90f16483b6713d0d564be3b9c6060e121a
    </Router>
  );
}

export default App;
