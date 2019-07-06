import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import Card from "./components/Card";
import dogs from "./dogs.json";
class App extends Component {
     state = {dogs};
    render() {
        return (
            <div><Navbar></Navbar>
           <Jumbotron></Jumbotron>
           {this.state.dogs.map( dog => (
            <Card
            id={dog.id}
            key={dog.id}
            image={dog.image}
            />
           ))}
          
               </div>
        );
    }
}

//image click function that registers click, each click not repeated increases the score by one,images shuffle, if clicked again score stops, game over restart game, keep highest score

 export default App;
