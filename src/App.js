import React from "react";
import { Component } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CardContainer from "./components/CardContainer";
import Card from "./components/Card";
import Footer from "./components/Footer";
import images from "./img/images.json";
import "./App.css";

export default class App extends Component {
  state = {
    images,
    unguessedImages: images,
    score: 0,
    topScore: 0,
    message: "Click an image to begin!"
  };

  shuffleArray = array => {
    array.sort(() => Math.random() - 0.5);
  };

  /** This method will update the initial state if the user guesses the wrong image */
  guessWrongSetState = () => {
    this.setState({
      topScore:
        this.state.score > this.state.topScore
          ? this.state.score
          : this.state.topScore,
      score: 0,
      images,
      unguessedImages: images,
      message: "Game Over. You guessed incorrectly!"
    });
  };

  /** This method will update the initial state if the user guesses the right image */
  guessRightSetState = unguessedImageArray => {
    this.setState({
      score: this.state.score + 1,
      images,
      unguessedImages: unguessedImageArray,
      message: "Correct!"
    });
  };

  /** This method will check if the user guesses is right or wrong */
  guessImage = id => {
    const findImage = this.state.unguessedImages.find(image => image.id === id);

    console.log("image", findImage);
    if (findImage === undefined) {
      this.guessWrongSetState();
    } else {
      const unguessedImageArray = this.state.unguessedImages.filter(
        image => image.id !== id
      );
      this.guessRightSetState(unguessedImageArray);
    }
    this.shuffleArray(images);
  };

  render() {
    return (
      <div className="App">
        <Navbar
          score={this.state.score}
          topScore={this.state.topScore}
          message={this.state.message}
        />
        <Hero />
        <CardContainer>
          {this.state.images.map(image => (
            <Card
              id={image.id}
              key={image.id}
              imageUrl={image.imageUrl}
              guessImage={this.guessImage}
            />
          ))}
        </CardContainer>
        <Footer />
      </div>
    );
  }
}
