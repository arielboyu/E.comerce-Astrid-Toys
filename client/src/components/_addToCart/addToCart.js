import React from "react";
import axios from "axios";
import style from "../_productCard/productCard.module.css";

const AddToCart = ({ productId }) => {
  //*const [product, setProduct] = useState({});*

  const handlerClick = () => {
    const userId = 1
    const quantity = 1
    const data = { quantity,productId }
    axios.post(`http://localhost:3002/users/${userId}/cart`,data)
    .then((res) => {
      console.log("se agregó producto: ", productId, "al usuario: ", userId );
    })
    .catch(e=>console.log("nose agrego: ", e))
  };

  return (
        <button
          id="boton-agregar"
          className={`btn btn-danger mx-3 mb-1 ${style.cart}`}
          data-toggle="modal"
          data-target="#exampleModal"
          type="button"
          onClick={() => handlerClick()}
        >
          <i class="fas fa-cart-plus"></i> ADD TO CART
        </button>)
        {/* <div
          class="modal"
          id="exampleModal"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">
                  Added to cart
                </h5>
                <button
                  type="button"
                  class="close"
                  data-dismiss="modal"
                  aria-label="Close"
                  onClick={() => window.location.reload()}
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
               <div class="modal-body">Product added to cart</div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-primary"
                  data-dismiss="modal"
                  onClick={() => window.location.reload()}
                >
                  Ok
                </button>
              </div>
            </div>
          </div>
        </div>         */}
};


export default AddToCart;
