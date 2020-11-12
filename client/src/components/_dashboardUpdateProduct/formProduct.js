import React from "react";

function FormProduct() {
  return (
    <>
      <div className="container d-flex flex-column mx-auto my-5 ">
        <h2 className="display-3">Load Product</h2>
        <form 
        // onSubmit={handlerSubmit}
        >
          <div className="form-group">
            <label htmlFor="productName">Product Name</label>
            <input
              type="text"
              className="form-control"
              name="name"
            //   value={productLoad.name}
              placeholder="Funko..."
            //   onChange={handlerChange}
            />
          </div>

          <div className="form-row">
            <div className="form-group col-md-12">
              <label htmlFor="productCategory">Category</label>
              <div className="custom-control custom-switch d-flex">
                  <div className="col-sm-4 col-md-3 col-lg-2">
                  <input
                    //   name={c.name}
                      type="checkbox"
                      className="custom-control-input"
                    //   id={c.id}
                    //   onChange={handlerChangeCategory}
                    />
                    <label className="custom-control-label" 
                    // htmlFor={c.id}
                    >
                      {/* {c.name} */}
                    </label>
                  </div>
                {/* {category.map((c) => (
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
                ))} */}
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
                // onKeyPress={handlerKey}
                // value={productLoad.stock}
                // onChange={handlerChange}
              />
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="productPrice">Price</label>
              <input
                type="text"
                className="form-control"
                name="price"
                // onKeyPress={handlerKey}
                // value={productLoad.price}
                // onChange={handlerChange}
              />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="productDescription">Description</label>
            <textarea
              className="form-control"
              name="description"
            //   value={productLoad.description}
              rows="3"
            //   onChange={handlerChange}
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
                // value={productLoad.active}
                name="active"
                // onChange={handlerChange}
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
                <div class="modal-body">sadasdas</div>
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
    </>
  );
}
export default FormProduct;
