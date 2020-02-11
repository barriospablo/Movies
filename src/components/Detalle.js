import React, { Component } from "react";
import "../styles/Detalle.css";

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
      <div class="card super mb-3">
        <div class="row no-gutters">
          <div class="col-md-4 col-12">
            <img
              src={this.state.pelis.Poster}
              class="card-img img-flex"
              alt="..."
              id="img"
            />
          </div>
          <div class="col-md-8 col-sm-8 col-4">
            <div class="card-body">
              <h5 class="card-title">{this.state.pelis.Title}</h5>
              <p class="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
              <p>
                <b>Rated: </b>
                {this.state.pelis.Rated}
              </p>
              <p>
                <b>Writer: </b>
                {this.state.pelis.Writer}
              </p>
              <p>
                <b>Released: </b>
                {this.state.pelis.Released}
              </p>
              <p>
                <b>Runtime: </b>
                {this.state.pelis.Runtime}
              </p>
              <p>
                <b>Actors: </b>
                {this.state.pelis.Actors}
              </p>
              <p>
                <b>Laguage: </b>
                {this.state.pelis.Language}
              </p>
              <p class="card-text">
                <small class="text-muted">{this.state.pelis.Type}</small>
              </p>
            </div>
          </div>
        </div>
      </div>
      // <div className="row">
      //   <div className="card super">
      //     <div className="card-body">
      //       <h5 className="card-title">{this.state.pelis.Title}</h5>
      //       <img  />
      //       <p className="card-text">
      //         <b>Director: </b> {this.state.pelis.Director}
      //       </p>
      //       <div className="col-6">
      //         <p>
      //           <b>Rated: </b>
      //           {this.state.pelis.Rated}
      //         </p>
      //         <p>
      //           <b>Actors: </b>
      //           {this.state.pelis.Actors}
      //         </p>
      //         <p>
      //           <b>Laguage: </b>
      //           {this.state.pelis.Language}
      //         </p>
      //       </div>
      //     </div>
      //   </div>
      // </div>
    );
  }
}

export default Detalle;
