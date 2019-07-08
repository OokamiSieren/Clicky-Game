import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import Card from "./components/Card";
import Wrapper from "./components/Wrapper";
import dogs from "./dogs.json";
class App extends Component {
  state = {
    dogs,
    score: 0,
    highscore: 0
  };
  gameOver = () => {
    if (this.state.score > this.state.highscore) {
      this.setState({ highscore: this.state.score }, function() {
        console.log(this.state.highscore);
      });
    }
    this.state.dogs.forEach(dog => {
      dog.count = 0;
    });
    alert(`Game Over \nscore: ${this.state.score}`);
    this.setState({ score: 0 });
    return true;
  };

  dogClickCount = id => {
    // eslint-disable-next-line array-callback-return
    this.state.dogs.find((o, i) => {
      if (o.id === id) {
        if (dogs[i].count === 0) {
          dogs[i].count = dogs[i].count + 1;
          this.setState({ score: this.state.score + 1 }, function() {
            console.log(this.state.score);
          });
          this.state.dogs.sort(() => Math.random() - 0.5);
          return true;
        } else {
          this.gameOver();
        }
      }
    });
  };

  render() {
    return (
      <Wrapper>
        <Navbar score={this.state.score} highscore={this.state.highscore} />
        <Jumbotron />
        {this.state.dogs.map(dog => (
          <Card
            dogClickCount={this.dogClickCount}
            id={dog.id}
            key={dog.id}
            name={dog.name}
            image={dog.image}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
