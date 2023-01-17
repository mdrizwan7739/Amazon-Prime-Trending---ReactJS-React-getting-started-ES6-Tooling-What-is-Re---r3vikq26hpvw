import React, { Component, useState } from "react";
import "../styles/App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentSlide: 0,
    };
  }

  render() {
    return (
      <>
        <h1 data-testid="title">
          {this.props.slides[this.state.currentSlide].title}
        </h1>
        <p data-testid="text">
          {this.props.slides[this.state.currentSlide].text}
        </p>
        <button
          data-testid="button-prev"
          disabled={this.state.currentSlide === 0}
          onClick={() => {
            this.setState({
              currentSlide: this.state.currentSlide - 1,
            });
          }}
        >
          Previous
        </button>
        <button
          data-testid="button-next"
          disabled={this.state.currentSlide === this.props.slides.length - 1}
          onClick={() => {
            this.setState({
              currentSlide: this.state.currentSlide + 1,
            });
          }}
        >
          Next
        </button>
        <button
          onClick={() => {
            this.setState({
              currentSlide: 0,
            });
          }}
          disabled={this.state.currentSlide===0}
          data-testid="button-restart"
        >
          Restart
        </button>
      </>
    );
  }
}

export default App;
