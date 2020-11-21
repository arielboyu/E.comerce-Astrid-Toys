import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const LoadReview = ({idProduct}) => {
  const [loadReview, setLoadReview] = useState({
    score: 1,
    description: ""
  });

  function handlerChangeScore(e) {
    setLoadReview({ ...loadReview, star: e.target.value });
  }
  function handlerChangeDescription(e) {
    setLoadReview({ ...loadReview, text: e.target.value });
  }


  function handlerLoadReviewSubmit(e) {
    axios
      .post(`${process.env.REACT_APP_API_URL}/${idProduct}/review`, loadReview)
      .then((res) => {
        console.log("Review loaded");
      })
      .catch((e) => {
        console.log(e);
      });
    e.preventDefault();
  }

  return (
    
    <div className="container d-flex flex-column mx-auto my-5 col-sm-12 col-md-8 col-lg-6 p-5 border shadow">
      <h2 class="display-5 mb-4 text-center">Let us your comment... :) </h2>
      <form onSubmit={handlerLoadReviewSubmit}>
        <div className="form-group">
          <label htmlFor="ReviewScore" className="">
            score:
          </label>
          <input
            type="text"
            className="form-control"
            name="star"
            value={loadReview.score}
            placeholder="Rate us..."
            onChange={handlerChangeScore}
          />
        </div>
        <div className="form-group">
          <label htmlFor="ReviewText">Comment us your opinion:</label>
          <textarea
            className="form-control"
            name="description"
            value={loadReview.description}
            rows="3"
            onChange={handlerChangeDescription}
          ></textarea>
        </div>
        <button
          type="submit"
          className="btn btn-dark"
          data-toggle="modal"
          data-target="#modalCreateCat"
        >
          Submit
        </button>
        <Link to="/myShop/1">
          <button className="btn btn-danger ml-2">Back</button>
        </Link>
      </form>
      {/* <!-- Modal --> */}
      <div
        class="modal"
        id="modalCreateCat"
        tabindex="-1"
        role="dialog"
        aria-labelledby="modalCreateCatLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="modalCreateCatLabel">
              Ratings
              </h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">Category created</div>
            <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-danger"
                  data-dismiss="modal"
                  onClick={()=>window.location.reload()}
                >
                  OK
                </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoadReview;
  