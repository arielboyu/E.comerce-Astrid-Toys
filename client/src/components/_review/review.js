import React, { useState, useEffect } from "react";

export default function Review() {
  const [review, setReview] = useState([]);
  return (
  
      <>
        <div className="container d-flex flex-column text-center my-5 p-5">
          <h1 className="display-3">Ratings</h1>
              <div className="row headCont">
              <div className="col-4 col-md-8">
                <span>name</span>
              </div>
              <div className="col-4 col-md-2">
                <span>ratings</span>
              </div>
              <div className="col-4 col-md-2">
                <span>comentarios</span>
              </div> 
              </div> 
              </div>
      
 
          <form>
            <fieldset>
              <span class="star-cb-group">
                <input type="radio" id="rating-5" name="rating" value="5" /><label for="rating-5">5</label>
                <input type="radio" id="rating-4" name="rating" value="4" checked="checked" /><label for="rating-4">4</label>
                <input type="radio" id="rating-3" name="rating" value="3" /><label for="rating-3">3</label>
                <input type="radio" id="rating-2" name="rating" value="2" /><label for="rating-2">2</label>
                <input type="radio" id="rating-1" name="rating" value="1" /><label for="rating-1">1</label>
                <input type="radio" id="rating-0" name="rating" value="0" class="star-cb-clear" /><label for="rating-0">0</label>
              </span>
            </fieldset>
          </form>
          <script> 

          </script>
          </>
      )}
      



    
