import React, { Component } from "react";
import "../styles/Footer.css";

class Detalle extends Component {
  state = {
    pelis: []
  };
  componentDidMount() {
    this.getDetails();
  }
  getDetails() {
    const { handle } = this.props.match.params;
    const key = "2d0c175a";
    const url = `http://www.omdbapi.com/?i=${handle}&apikey=${key}`;
    fetch(url)
      .then(response => response.json())
      .then(response => {
        this.setState({
          pelis: response
        });
        console.log(this.state.pelis);
      })
      .catch(err => console.log(err));
  }
  render() {
    return (
      <div>
        <p>{this.state.pelis.Title}</p>
        <img src={this.state.pelis.Poster} />
        <p>Hello</p>
      </div>
    );
  }
}

export default Detalle;
