import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link,useParams } from "react-router-dom";
import Rating from "react-rating";
import {useSelector} from 'react-redux'

const LoadReview = () => {
  const [loadReview, setLoadReview] = useState({
    userId:0,
    score: 0,
    description: ""
  });
  const { idProduct } = useParams();
  console.log("idProduct:",idProduct)
  const user= useSelector(state => state.user)
  useEffect(()=>{
    setLoadReview({ ...loadReview, userId:user.id })
  },[])
  
 

  function handlerChangeScore(e) {
    setLoadReview({ ...loadReview, score: e});
  }
  function handlerChangeDescription(e) {
    setLoadReview({ ...loadReview, description: e.target.value });
  }

  function handlerLoadReviewSubmit(e) {
    e.preventDefault()
    console.log("user: ", user)
    // setLoadReview({ userId:user.id })

    console.log("loadReview: ",loadReview)
    axios
      .post(`${process.env.REACT_APP_API_URL}/${idProduct}/review`, loadReview)
      .then((res) => {
        console.log("Review loaded");
      })
      .catch((e) => {
        console.log(e);
      });
  }

  return (
    
    <div className="container d-flex flex-column mx-auto my-5 col-sm-12 col-md-8 col-lg-6 p-5 border shadow">
      <h2 class="display-5 mb-4 text-center">Did you like the product? Will you recommend it? Leave a review :) </h2>
      <form onSubmit={handlerLoadReviewSubmit}>
        <div className="form-group">
          <label htmlFor="ReviewScore" className="">
            How much?   :
          </label>
          {/* <input
            type="text"
            className="form-control"
            name="star"
            value={loadReview.score}
            placeholder="Rate us..."
            onChange={handlerChangeScore}
          /> */}
              <Rating
                start={0}
                stop={5}
                fractions={1}
                initialRating={loadReview.score}
                readonly={false}
                fullSymbol="fa fa-star"
                emptySymbol="fa fa-star-o"
                onChange={handlerChangeScore} 
              />
        </div>
        <div className="form-group">
          <label htmlFor="ReviewText">Leave us some comments!</label>
          <textarea
            className="form-control"
            name="description"
            // value={loadReview.description}
            rows="3"
            onChange={handlerChangeDescription}
          ></textarea>
        </div>
        <button
          type="submit"
          className="btn btn-dark"
          // data-toggle="modal"
          // data-target="#modalCreateReview"
        >
          Submit
        </button>
        <Link to="/myShop/1">
          <button className="btn btn-danger ml-2">Back</button>
        </Link>
      </form>
      {/* <!-- Modal --> */}
      {/* <div
        class="modal"
        id="modalCreateReview"
        tabindex="-1"
        role="dialog"
        aria-labelledby="modalCreateReviewLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">Thank you so much!</div>
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
      </div> */}
    </div>
  );
}

export default LoadReview;
  