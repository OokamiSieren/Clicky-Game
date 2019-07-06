import React from "react";
import "./style.css";

function Card(props) {
    return (
        <div>
        <div className="card">
        <div className="img-container">
            <img alt={props.name}src={props.image} />
            </div>
            </div>
            </div>
    );
}

export default Card;