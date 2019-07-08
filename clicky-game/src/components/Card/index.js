import React from "react";
import "./style.css";

function Card(props) {
    return (
        <div>
            <div onClick={() => props.dogClickCount(props.id)}className="card-deck" id="card">
        <div className="card">
            <img id="image"alt={props.name} className="card-img-top"src={props.image} />
            </div>
            </div>
            </div>
    );
}

// inside img tag add onClick={imgClick}
export default Card;