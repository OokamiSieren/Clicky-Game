import React from "react";
import "./style.css";
function Navbar(props) {
  return (
    <nav class="navbar navbar-light" id="nav">
      <span class="navbar-brand mb-0 h1">Clicky Game</span>
      <span>Click on the image to begin, but don't click more then once!</span>
      <span>
        Score: {props.score} | High Score: {props.highscore} 
      </span>
    </nav>
  );
}

export default Navbar;
