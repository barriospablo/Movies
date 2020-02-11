import React, { Component } from "react";
import Movies from "./Movies";
import Error from "./Error";
import "../styles/Container.css";

class Container extends Component {
  state = {
    error: null,
    query: "",
    pelis: []
  };
  componentDidMount() {
    console.log("Mounted");
  }
  componentWillUpdate(pervProps, prevState) {
    console.log(this.state.query.length);
    console.log(prevState);
  }

  getMovies() {
    const key = "4d5a0105";
    const url = `http://www.omdbapi.com/?s=${this.state.query}&apikey=${key}`;
    fetch(url)
      .then(response => response.json())
      .then(response => {
        this.setState({
          pelis: response.Search
        });
        console.log(this.state);
      })
      .catch(error => this.setState({ error: error }));
  }

  handleSubmit = e => {
    e.preventDefault();
    this.getMovies();
  };
  handleChange = e => {
    if (this.state.query.length > 4) {
      this.getMovies();
    }

    this.setState({
      [e.target.id]: e.target.value
    });
  };
  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit}>
          <label>
            <strong>Search movie</strong>
          </label>
          <input
            type="text"
            id="query"
            className="form-control"
            placeholder="Search"
            onChange={this.handleChange}
          />
        </form>
        <div>
          {this.state.pelis == undefined ? (
            <Error />
          ) : (
            this.state.pelis.map(movie => (
              <Movies movie={movie} key={movie.imdbID} />
            ))
          )}
        </div>
      </div>
    );
  }
}
export default Container;
