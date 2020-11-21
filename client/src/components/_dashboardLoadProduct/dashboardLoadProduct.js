import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const getCategory = axios.get(`${process.env.REACT_APP_API_URL}/categories`);

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
  const [image, setImage] = useState(null);
  const [msg, setMsg] = useState("");

  const uploadAction = (image,productInDB) => {
    const formData = new FormData();
    formData.append("image", image);
    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };
    axios
      .post(
        `${process.env.REACT_APP_API_URL}/products/upload`,
        formData,
        config
      )
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  const handleImageUpload = (e) => {
    console.log(e.target.files[0]);
    setImage(e.target.files[0]);
  };

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
    if (e.target.name === "active") {
      setProduct({ ...productLoad, [e.target.name]: e.target.checked });
    } else {
      setProduct({ ...productLoad, [e.target.name]: e.target.value });
    }
    // e.preventDefault();
  };

  const handlerSubmit = (e) => {
    console.log(productLoad);
    if (validateDates()) {
      axios
        .post(`${process.env.REACT_APP_API_URL}/products`, productLoad)
        .then((productInDB) => {
          uploadAction(image,productInDB);
          console.log(productInDB);
        })
        .catch((er) => {
          console.log(er);
        });
    }
    e.target.reset();
    //comente esto para que la pagina recargue cuando hacen submit (soy nico)
    //e.preventDefault();
    /*     
    otra forma podria ser 
    setProduct({}) 
    pero luego rompe*/
    //o tambien
    //e.target.reset();
    //pero no resetea todo el form como deberia
  };

  const handlerKey = (e) => {
    let arr = ["0", "1", "2", "3", "4", "5", "7", "8", "9"];
    if (arr.indexOf(e.key) === -1) {
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
      <form
        id="loadProductForm"
        enctype="multipart/form-data"
        onSubmit={handlerSubmit}
      >
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

        <div className="form-row border-top pt-2">
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
        <div className="form-row border-top pt-2">
          <div className="form-group col-md-6">
            <p>Show product in store</p>
            <div
              className="pl-4"
              style={{
                backgroundColor: "rgba(3, 122, 19, 0.2)",
                border: "1px solid grey",
                padding: "1px",
                borderRadius: "7px",
                width: "55px",
              }}
            >
              <input
                onChange={handlerChange}
                className="form-check-input"
                type="checkbox"
                value="active"
                name="active"
              />
              <label className="form-check-label" htmlFor="active">
                {productLoad.active ? "Yes" : "No"}
              </label>
            </div>
          </div>
          <div className="form-group col-md-3">
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
          <div className="form-group col-md-3">
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
        <div className="form-group border-top pt-2 mt-2">
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
              name="image"
              type="file"
              class="form-control-file"
              onChange={handleImageUpload}
            ></input>
          </div>
        </div>
        <button
          type="submit"
          className="btn btn-dark"
          data-toggle="modal"
          data-target="#exampleModal"
        >
          Submit
        </button>
        <Link to="/dashboard/product/update">
          <button className="btn btn-danger ml-2">Back</button>
        </Link>
      </form>
    </div>
  );
}

export default DashboardLoadProduct;
