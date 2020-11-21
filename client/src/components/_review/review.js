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

{
  /* <form>
        <fieldset>
          <span class="star-cb-group">
            <input type="radio" id="rating-5" name="rating" value="5" />
            <label for="rating-5">5</label>
            <input
              type="radio"
              id="rating-4"
              name="rating"
              value="4"
              checked="checked"
            />
            <label for="rating-4">4</label>
            <input type="radio" id="rating-3" name="rating" value="3" />
            <label for="rating-3">3</label>
            <input type="radio" id="rating-2" name="rating" value="2" />
            <label for="rating-2">2</label>
            <input type="radio" id="rating-1" name="rating" value="1" />
            <label for="rating-1">1</label>
            <input
              type="radio"
              id="rating-0"
              name="rating"
              value="0"
              class="star-cb-clear"
            />
            <label for="rating-0">0</label>
          </span>
        </fieldset>
      </form>
      <script></script>
    </> */
}
