import React from "react";
import Rating from "react-rating";

export default function StarScore({ score }) {
  return (
    <Rating
      start={0}
      stop={5}
      fractions={2}
      initialRating={score}
      readonly={true}
      fullSymbol="fa fa-star"
      emptySymbol="fa fa-star-o"
    />
  );
}
