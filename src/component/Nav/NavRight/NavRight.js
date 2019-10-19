import React, { Component } from "react";
import "./NavRight.scss";

class NavRight extends Component {
  render() {
    return (
      <div className="nav-right">
        <div className="search"></div>
        <div className="heart-img"></div>
        <div className="my-page"></div>
      </div>
    );
  }
}

export default NavRight;
