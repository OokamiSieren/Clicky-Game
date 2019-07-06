import React from "react";
import "./style.css";
function Navbar () {
    return (
        <nav class="navbar navbar-light bg-light" id="nav">
  <span class="navbar-brand mb-0 h1">Clicky Game</span>
  <span>Click on the image to begin!</span>
  <span>Score: 0 | Top Scrore: 0</span>
</nav>
    );
}

export default Navbar;