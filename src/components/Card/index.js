import React from "react";
import "./style.css";

function Card(props) {
  return (
    // <div className="container">
    <div
     
      className="card-deck"
      id="card"
    >
      <div className="card">
        <img
          id="image"
          alt={props.name}
          className="card-img-top"
          src={props.image}
          onClick={() => props.dogClickCount(props.id)}
        />
      </div>
    </div>
    // </div>
  );
}

// inside img tag add onClick={imgClick}
export default Card;
