<<<<<<< HEAD
import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Review() {
  const [review, setReview] = useState({
    star: 1,
    text: ""
  });

  function handlerChangeStar(e) {
    setReview({ ...review, star: e.target.value });
  }
  function handlerChangeText(e) {
    setReview({ ...review, text: e.target.value });
  }

  function handlerReviewSubmit(e) {
    axios
      .post(`${process.env.REACT_APP_API_URL}/MyShop/Review`, review)
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
      <h2 class="display-3 mb-4 text-center">New Category</h2>
      <form onSubmit={handlerReviewSubmit}>
        <div className="form-group">
          <label htmlFor="ReviewStar" className="">
            star:
          </label>
          <input
            type="text"
            className="form-control"
            name="star"
            value={review.star}
            placeholder="Rate us..."
            onChange={handlerChangeStar}
          />
        </div>
        <div className="form-group">
          <label htmlFor="ReviewText">Text:</label>
          <textarea
            className="form-control"
            name="text"
            value={review.text}
            rows="3"
            onChange={handlerChangeText}
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
        <Link to="/MyShop/idUser">
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
                Categories
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
  /*
=======
import React, { useState, useEffect } from "react";
import axios from "axios";
import StarScore from './starScore';

export default function Review({productId}) {
  const [reviews, setReviews] = useState([]);
  const [averageScore, setAverageScore] = useState("");
  const [load, setLoad] = useState(false);
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/products/${productId}`)
      .then((res) => {
        setAverageScore(res.data[0].averageScore);
        axios.get(`${process.env.REACT_APP_API_URL}/products/${productId}/review`)
        .then((res)=>{
          console.log("get Review; ",res.data)
          setReviews(res.data);
        })
        setLoad(true);
      });
  }, [load]);
>>>>>>> b06595cb80638c80502bde653f09075974bc8676
  return (
    <>
      <div className="d-flex flex-column mx-auto text-center mt-5 mt-lg-0">
        <div className="mt-5 mt-lg-0">
          {console.log(averageScore)}
          <h1 className="display-3 mt-5 pt-5 pt-lg-0 mt-lg-0">{!averageScore ? "S/C" : averageScore}</h1>
          <span className="text-warning"><StarScore score = {averageScore}/></span>
        </div>
        

<<<<<<< HEAD
          </script>
          </>
      )}*/
      



    
=======
        <h3 className="mt-3 mt-lg-5">Reviews</h3>
        {reviews.map(review=>(
          <div className="d-flex headCont flex-column flex-lg-row w-75 mx-auto">
            <div className="col-12 col-lg-3">
              <span>{review.user.name}</span>
            </div>
            <div className="col-12 col-lg-3">
              <span className="mr-2">{review.score}</span>
              <span className="text-warning"><StarScore score = {review.score}/></span>
            </div>
            <div className="col-12 col-lg-6 text-center text-lg-left">
              <p className="mt-2 mt-lg-0">" {review.description} "</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
>>>>>>> b06595cb80638c80502bde653f09075974bc8676
