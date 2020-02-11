import React, { Component } from "react";
import "../styles/Header.css";
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <div className="header">
        <Link to="/home">
          <h1>Home</h1>
        </Link>
      </div>
    );
  }
}

export default Header;
