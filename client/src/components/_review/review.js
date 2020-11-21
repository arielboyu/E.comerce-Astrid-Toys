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
      <div className="container d-flex flex-column text-center my-5 p-5">
        <div>
          <h1 className="display-3">{averageScore}</h1>
          <StarScore score = {averageScore}/>
        </div>
        

        <h3 >Reviews</h3>
        {reviews.map(review=>(
          <div className="row headCont">
            <div className="col-4 col-md-2">
              <span>{review.user.name}</span>
            </div>
            <div className="col-4 col-md-2">
              <span>{review.score}<StarScore score = {review.score}/></span>
            </div>
            <div className="col-4 col-md-8">
              <span>{review.description}</span>
            </div>
          </div>
        ))}
        

      </div>
    </>
  );
}