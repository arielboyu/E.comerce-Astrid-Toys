import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams,Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

const getCategory = axios.get(`${process.env.REACT_APP_API_URL}/categories`);

function UpdateProduct() {
  const [category, setCategory] = useState([]);
  const [productUpdate, setProduct] = useState([]);
  const [load, setLoad] = useState(false);
  const user = useSelector((state) => state.user);
  const { id } = useParams();
  
  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/products/${id}`).then((res) => {
      
      let initialState = res.data[0];
      setLoad(true);
      axios
        .get(`${process.env.REACT_APP_API_URL}/products/${id}/categories`)
        .then((res) => {
          initialState.categories = [];
          res.data.forEach((category) =>
            initialState.categories.push(category.name)
          );
          setProduct(initialState);
        });
    });

    getCategory.then((res) => {
      setCategory(res.data);
    });
  }, [load]);

  const handlerChange = (e) => {
    
    if(e.target.name === 'active'){
      setProduct({ ...productUpdate, [e.target.name]: e.target.checked });
    } else {
      setProduct({ ...productUpdate, [e.target.name]: e.target.value });
    }
  };

  const handlerCategories = (e) => {
    let categoriesAct = productUpdate.categories
    if(categoriesAct && categoriesAct.includes(e.target.value)){
      let index = categoriesAct.indexOf(e.target.value)
      if (index > -1) {
        categoriesAct.splice(index, 1);
      }
    }else{
      categoriesAct.push(e.target.value);
    }
    setProduct({ ...productUpdate, categories: categoriesAct });
  }; 

  const handlerSubmit = (e) => {
    axios
      .put(`${process.env.REACT_APP_API_URL}/products/${id}`, productUpdate)
      .then((r) => {
        console.log(r);
      })
      .catch((er) => {
        console.log(er);
      });
    e.preventDefault();
  };
  const handlerKey = (e) => {
    let arr = ["0", "1", "2", "3", "4", "5", "7", "8", "9"];
    if (arr.indexOf(e.key) === -1) {
      e.preventDefault();
    }
  };

  return (
    <div className="firstContainer container d-flex flex-column mx-auto my-5 p-5 border shadow">
      {!user.isAdmin ? <Redirect to='/products'/> : null} 
      <h2 className="display-3 text-center">Update Product</h2>
      <form onSubmit={handlerSubmit}>
        <div className="form-group">
          <label htmlFor="productName">Product Name</label>
          <input
            type="text"
            className="form-control"
            name="name"
            value={productUpdate.name}
            placeholder="Funko..."
            onChange={handlerChange}
          />
        </div>
        <div className="form-row">
          <div className="form-group col-md-12 ">
            <label htmlFor="productCategory">Categories</label>
            <div className="custom-control custom-switch d-flex">
              {category.map((c) =>
                productUpdate.categories && productUpdate.categories.includes(c.name) ? (
                  <div className="col-sm-4 col-md-3 col-lg-2">
                  {/* Si encuentra que el producto esta en esa categoria, la checkea por default */}
                    <input
                      className="custom-control-input"
                      type="checkbox"
                      checked="checked"
                      value={c.name}
                      id={c.name}
                      name="category"
                      onChange={handlerCategories}
                    />
                    <label className="custom-control-label" for={c.name}>
                      {c.name}
                    </label>
                  </div>
                ) : (
                  <div className="col-sm-4 col-md-3 col-lg-2">
                    <input
                      className="custom-control-input"
                      type="checkbox"
                      // checked="false"
                      value={c.name}
                      id={c.name}
                      name="category"
                      onChange={handlerCategories}
                    />
                    <label className="custom-control-label" for={c.name}>
                      {c.name}
                    </label>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
        {/* Agregado Rodri */}
        <div className="form-row border-top pt-2">
          <div className="form-group col-md-6">
            <p>Show product in store</p>
            <div className="pl-4" style={{backgroundColor:"#bedbbb",border: "1px solid grey",padding:"1px",borderRadius: "7px", width:"55px"}}>
              <input
                onChange={handlerChange}
                className="form-check-input"
                type="checkbox"
                value={productUpdate.active}
                name="active"
                checked={productUpdate.active}
              />
              <label className="form-check-label" htmlFor="active">
                {productUpdate.active ? "Yes" : "No"}
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
              value={productUpdate.stock}
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
              value={productUpdate.price}
              onChange={handlerChange}
            />
          </div>
        </div>
         {/* Aca termina */}
        {/* <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="productStock">Stock</label>
            <input
              type="text"
              className="form-control"
              name="stock"
              value={productUpdate.stock}
              onChange={handlerChange}
            />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="productPrice">Price</label>
            <input
              type="text"
              className="form-control"
              name="price"
              value={productUpdate.price}
              onChange={handlerChange}
            />
          </div>
        </div> */}
        <div className="form-group">
          <label htmlFor="productDescription">Example textarea</label>
          <textarea
            className="form-control"
            name="description"
            value={productUpdate.description}
            rows="3"
            onChange={handlerChange}
          ></textarea>
        </div>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="productImage">Upload Image </label>
            <input
              type="file"
              class="form-control-file"
              id="productImage"
            ></input>
          </div>
          {/* <div className="form-group col-md-6">
            <input
              className="form-check-input"
              type="checkbox"
              value="productCheck"
              name="productCheck"
            />
            <label className="form-check-label" htmlFor="productCheck">
              activate product in store ?
            </label>
          </div> */}
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          data-toggle="modal"
          data-target="#exampleModal"
        >
          Submit
        </button>
        <Link to="/dashboard/product/list">
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
                  Product Update
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
              <div class="modal-body">Confirmed.</div>
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

export default UpdateProduct;
