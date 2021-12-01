import React from "react";

function Card({ musicTitle, rating }) {
  return (
    <div className="card">
      <p>Name: {musicTitle} </p>
      <span>Rating: {rating}</span>
    </div>
  );
}

export default Card;
