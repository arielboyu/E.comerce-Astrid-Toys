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
  return (
    <>
      {averageScore ? (

      <div className="d-flex flex-column mx-auto text-center mt-5 mt-lg-0">
    
        <div className="mt-5 mt-lg-0">
          <h3 className="mt-5 pt-5 pt-lg-0 mt-lg-2 mb-0">Popularity</h3>
          <h1 className="display-3 mt-5 pt-5 pt-lg-0 mt-lg-0">{!averageScore ? "S/C" : averageScore}</h1>
          <span className="text-warning display-4"><StarScore score = {averageScore}/></span>
        </div>
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

        ) : <></> }
    </>
  );
}

