import React from "react";
import { BrowserRouter as  Route, Switch } from "react-router-dom";
import { useParams } from "react-router-dom";
import ShoppingHistory from "./shoppingHistory.js";
import LoadReview from "../../Review/loadReview.js";
//Este componente se mostrara en una solapa "Mis Compras" de un determinado usuario

const ContainerShop = () => {
  //obtener todas las compras (shopping) de el idUser
  //mappear las "shopping" que no estan pendientes (las que no estan en el carrito)
  //mostrar esas shopping en una lista
  const { idUser } = useParams();

  return (
      <Switch>
        <Route path="/myshop/loadReview">
          <LoadReview />
        </Route>
        <Route path="/">
          <ShoppingHistory idUser={idUser} />
        </Route>
      </Switch>
  );
};

export default ContainerShop;
