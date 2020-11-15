import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import axios from "axios";
import { useParams } from "react-router-dom";
import Order from "./orderDetails.js";
import ShoppingHistory from "./shoppingHistory.js";
//Este componente se mostrara en una solapa "Mis Compras" de un determinado usuario

const ContainerShop = () => {
  //obtener todas las compras (shopping) de el idUser
  //mappear las "shopping" que no estan pendientes (las que no estan en el carrito)
  //mostrar esas shopping en una lista
  const { idUser } = useParams();

  return (
    <Router>
      <Switch>
        <Route path="/myshop/details/:idOrder">
          <Order />
        </Route>
        <Route path="/">
          <ShoppingHistory idUser={idUser} />
        </Route>
      </Switch>
    </Router>
  );
};

export default ContainerShop;
