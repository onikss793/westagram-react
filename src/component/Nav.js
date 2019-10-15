import React, { Component } from "react";
import SearchList from "../component/SearchList";
import "../style/Nav.css";

class Nav extends Component {
  render() {
    const { searchList } = this.props;
    return (
      <div className="nav">
        <div className="nav-align">
          <div>
            <div className="instagram-logo"></div>
          </div>
          <form className="searchForm">
            <input type="text" placeholder="입력" />
            <SearchList searchList={searchList} />
          </form>
          <div className="nav-right">
            <div className="search"></div>
            <div className="heart-img"></div>
            <div className="my-page"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default Nav;
