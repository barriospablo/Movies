import React, { Component } from "react";
import "../styles/Footer.css";

function Detalle(props) {
  const { movie } = props;

  return (
    <div className="Detalle">
      <h1>{movie.imdbID}</h1>
    </div>
  );
}

export default Detalle;
