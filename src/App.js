import React, { Component } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./styles/App.css";
import Container from "./components/Container";
import Detalle from "./components/Detalle";
import pageError from "./components/Error";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/home" component={Container} />
          <Route exact path="/detalle/:handle" component={Detalle} />
          {/* <Route exact path="/error" component={pageError} /> */}
          <Redirect from="*" to="/home" />
        </Switch>
        <Footer />
      </BrowserRouter>
    );
  }
}

export default App;
