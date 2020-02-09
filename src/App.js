import React, { Component } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./styles/App.css";
import Container from "./components/Container";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Container />

        <Footer />
      </div>
    );
  }
}

export default App;
