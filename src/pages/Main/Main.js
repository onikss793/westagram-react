import React, { Component } from "react";
import Nav from "../../component/Nav/Nav";
import "./Main.scss";
import "../../style/common.scss";
import MainAlign from "./MainAlign";

class Main extends Component {
  render() {
    return (
      <div className="main-container">
        <Nav />
        <MainAlign />
      </div>
    );
  }
}

export default Main;
