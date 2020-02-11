import React from "react";
import "../styles/Movies.css";
import { Link } from "react-router-dom";

function Movies(props) {
  const { movie } = props;

  return (
    <Link to={{ pathname: `/detalle/${movie.imdbID}` }}>
      <div className="card col-6 col-md-3">
        <div className="card-body">
          <img src={movie.Poster} className="card-img-top" alt="img" />
          <h5 className="card-title">{movie.Title}</h5>
          <p className="card-text">{movie.Year}</p>
        </div>
      </div>
    </Link>
  );
}

export default Movies;
