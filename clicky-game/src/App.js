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



 export default App;
