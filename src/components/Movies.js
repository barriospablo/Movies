import React from "react";
import "../styles/Movies.css";
import { Link } from "react-router-dom";

function Movies(props) {
  const { movie } = props;

  return (
    <div className="card col-sm-6 col-md-4">
      <div className="card-body">
        <img src={movie.Poster} className="card-img-top" alt="img" />
        <Link to={"/detalle"}>
          {" "}
          <h5 className="card-title">{movie.Title}</h5>
        </Link>
        <p className="card-text">{movie.Year}</p>
      </div>
    </div>
  );
}

export default Movies;
