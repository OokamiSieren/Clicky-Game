import React from "react";
import "./style.css";

function Jumbotron () {
    return (
        <div class="jumbotron jumbotron-fluid" id = "jumbo">
  <div class="container">
    <h1 class="display-4"className="text-align-center"><i class="fas fa-paw"></i> Click The Mug Game! <i class="fas fa-paw"></i></h1>
    {/* <p class="lead" id="text">Click on an image to earn points, but don't click more than once!</p> */}
  </div>
</div>
    );
}
export default Jumbotron;