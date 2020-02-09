import React, { Component } from "react";
import Movies from "./Movies";
import "../styles/Container.css";

class Container extends Component {
  state = {
    query: "",
    page: 1,
    pelis: []
  };

  getMovies() {
    const key = "2d0c175a";
    const url = `http://www.omdbapi.com/?s=${this.state.query}&apikey=${key}&page=${this.state.page}`;
    fetch(url)
      .then(response => response.json())
      .then(response => {
        this.setState({
          pelis: response.Search
        });
      })
      .catch(err => <div>{err}</div>);
  }
  handleSubmit = e => {
    e.preventDefault();
    this.getMovies();
  };
  handleChange = e => {
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
          {this.state.pelis.map(movie => (
            <Movies movie={movie} key={movie.imdbID} />
          ))}
        </div>

        {/* <ul className="list-group">
          {this.state.pelis.map(movie => (
            <li className="list-group-item" key={movie.imdbID}>
              <Movies movie={movie} />
            </li>
          ))}
        </ul> */}
      </div>
    );
  }
}
export default Container;
