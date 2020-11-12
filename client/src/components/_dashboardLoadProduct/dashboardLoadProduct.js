import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const getCategory = axios.get("http://localhost:3002/categories");

function DashboardLoadProduct() {
  //Seteo un estado general para mostrar las categorias en las listas desplegrables
  const [category, setCategory] = useState([]);
  //Seteo un estado general
  const [productLoad, setProduct] = useState({
    name: "",
    stock: 0,
    price: 0,
    description: "",
    active: false,
    image: "",
    categories: [],
  });

  const [msg, setMsg] = useState("");

  const validateDates = () => {
    let stockParse = parseInt(productLoad.stock);
    let priceParse = parseFloat(productLoad.price);
    if (productLoad.name === "") {
      setMsg(msg + ">Name empty. ");
      return false;
    }
    if (stockParse > 9999 || stockParse <= 0) {
      setMsg(msg + ">Stock invalid. ");
      return false;
    }
    if (priceParse > 99999 || priceParse <= 0) {
      setMsg(msg + ">Price invalid. ");
      return false;
    }
    if (
      productLoad.description === "" ||
      productLoad.description.length > 400
    ) {
      setMsg(msg + ">Descriptio empty or invalid. ");
      return false;
    }
    if (productLoad.categories.length === 0) {
      setMsg(msg + ">Uncategorized product. ");
      return false;
    }
    setMsg("Product valid");
    return true;
  };

  useEffect(() => {
    getCategory.then((res) => {
      setCategory(res.data);
    });
  }, []);

  const handlerChange = (e) => {
    e.preventDefault();
    if (e.target.name === "active") {
      setProduct({ ...productLoad, [e.target.name]: e.target.checked });
    } else {
      setProduct({ ...productLoad, [e.target.name]: e.target.value });
    }
    console.log(productLoad[e.target.name]);
  };

  const handlerSubmit = (e) => {
    console.log(productLoad);
    if (validateDates()) {
      axios
        .post("http://localhost:3002/products", productLoad)
        .then((r) => {
          console.log(r);
        })
        .catch((er) => {
          console.log(er);
        });
    }
    e.preventDefault();
  };

  const handlerKey = (e) => {
    let arr = ["0", "1", "2", "3", "4", "5", "7", "8", "9"];
    if (arr.indexOf(e.key) == -1) {
      e.preventDefault();
    }
  };

  const handlerChangeCategory = (e) => {
    if (e.target.checked) {
      let addCategory = productLoad.categories.concat(e.target.id);
      setProduct({ ...productLoad, categories: addCategory });
    } else {
      let arr = productLoad.categories;
      let index = productLoad.categories.indexOf(e.target.id);
      let removeCategory = arr.splice(index, 1);
      setProduct({ ...productLoad, categories: arr });
    }
  };

  return (
    <div className="container d-flex flex-column mx-auto my-5 p-5 border shadow">
      <h2 className="display-3 text-center">Load Product</h2>
      <form onSubmit={handlerSubmit}>
        <div className="form-group">
          <label htmlFor="productName">Product Name</label>
          <input
            type="text"
            className="form-control"
            name="name"
            value={productLoad.name}
            placeholder="Funko..."
            onChange={handlerChange}
          />
        </div>

        <div className="form-row">
          <div className="form-group col-md-12">
            <label htmlFor="productCategory">Category</label>
            <div className="custom-control custom-switch d-flex">
              {category.map((c) => (
                <div className="col-sm-4 col-md-3 col-lg-2">
                  <input
                    name={c.name}
                    type="checkbox"
                    className="custom-control-input"
                    id={c.id}
                    onChange={handlerChangeCategory}
                  />
                  <label className="custom-control-label" htmlFor={c.id}>
                    {c.name}
                  </label>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="productStock">Stock</label>
            <input
              type="text"
              className="form-control"
              name="stock"
              onKeyPress={handlerKey}
              value={productLoad.stock}
              onChange={handlerChange}
            />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="productPrice">Price</label>
            <input
              type="text"
              className="form-control"
              name="price"
              onKeyPress={handlerKey}
              value={productLoad.price}
              onChange={handlerChange}
            />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="productDescription">Description</label>
          <textarea
            className="form-control"
            name="description"
            value={productLoad.description}
            rows="3"
            onChange={handlerChange}
          ></textarea>
        </div>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="productImage">Upload Image</label>
            <input
              type="file"
              class="form-control-file"
              id="productImage"
            ></input>
          </div>
          <div className="form-group col-md-6">
            <input
              className="form-check-input"
              type="checkbox"
              value={productLoad.active}
              name="active"
              onChange={handlerChange}
            />
            <label className="form-check-label" htmlFor="productCheck">
              activate product in store?
            </label>
          </div>
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          data-toggle="modal"
          data-target="#exampleModal"
        >
          Submit
        </button>
        <Link to="/dashboard/product/update">
          <button className="btn btn-danger ml-2">Back</button>
        </Link>
        {/* <!-- Modal --> */}
        <div
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
                  Products
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
              <div class="modal-body">{msg}</div>
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
        </div>
      </form>
    </div>
  );
}

export default DashboardLoadProduct;
