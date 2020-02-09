import React from "react";
import "../styles/Movies.css";

function Movies(props) {
  const { movie } = props;
  return (
    <div className="card">
      <div className="card-body">
        <img src={movie.Poster} className="card-img-top" />
        <h5 className="card-title">{movie.Title}</h5>
        <p className="card-text">{movie.Year}</p>
      </div>
    </div>
  );
}

export default Movies;
