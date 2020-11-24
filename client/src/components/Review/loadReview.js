import React, { useEffect, useState } from "react";
import axios from "axios";
import Rating from "react-rating";
import {useSelector} from 'react-redux'

const LoadReview = ({idProduct}) => {
  const user= useSelector(state => state.user)
  const [loadReview, setLoadReview] = useState({
    userId:0,
    score: 0,
    description: ""
  });

  useEffect(()=>{
    setLoadReview({ ...loadReview, userId:user.id })
  } , [ ] )

  function handlerChangeScore(e) {
    setLoadReview({ ...loadReview, score: e});
  }

  function handlerChangeDescription(e) {
    setLoadReview({ ...loadReview, description: e.target.value });
  }

  function handlerLoadReviewSubmit(e) {
    e.preventDefault()
    axios
      .post(`${process.env.REACT_APP_API_URL}/products/${idProduct}/review`, loadReview)
      .then((res) => { console.log("Review loaded") })
      .catch((e) => { console.log(e) });
  }

  return (
    <div className={`d-flex flex-column mx-auto mb-3 col-12`}>
      <form onSubmit={handlerLoadReviewSubmit}>
        <div className="form-group w-75 mx-auto">
          <p className="pb-0 mb-1" htmlFor="ReviewText">Did you like the product? Will you recommend it? Leave a review :) </p>
          <div className="text-warning">
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
          <textarea
            className="form-control mt-3"
            name="description"
            // value={loadReview.description}
            rows="2"
            onChange={handlerChangeDescription}
          ></textarea>
        </div>
        <button type="submit" className="btn btn-dark" >
          Submit
        </button>
      </form>
    </div>
  )
}

export default LoadReview;
  