import React from "react";
import { Link } from "react-router-dom";

function DetalleContainer(props) {
  const { movie } = props;

  return (
    <div className="card col-sm-6 col-md-4">
      <div className="card-body">
        <img src={movie.Poster} className="card-img-top" alt="img" />

        <p className="card-text">{movie.Year}</p>
      </div>
    </div>
  );
}

export default DetalleContainer;
