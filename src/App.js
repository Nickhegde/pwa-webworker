import React, { Component } from "react";
import Home from "./Home";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <section className="App-intro">
          <Home />
        </section>
      </div>
    );
  }
}

export default App;