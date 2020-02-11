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
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{this.state.pelis.Title}</h5>
          <img src={this.state.pelis.Poster} />
          <p className="card-text">
            <b>Director: </b> {this.state.pelis.Director}
          </p>
          <p>
            <b>Rated: </b>
            {this.state.pelis.Rated}
          </p>
          <p>
            <b>Actors: </b>
            {this.state.pelis.Actors}
          </p>
          <p>
            <b>Laguage: </b>
            {this.state.pelis.Language}
          </p>
        </div>
      </div>
    );
  }
}

export default Detalle;
