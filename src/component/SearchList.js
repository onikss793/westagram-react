import React, { Component } from "react";
import "../style/Nav.css";

class SearchList extends Component {
  idCount = 0;
  getSearchList = list => {
    let { idCount } = this;
    return list.map(el => {
      idCount++;
      return <li key={idCount}>el</li>;
    });
  };

  render() {
    const { getSearchList } = this;
    const { searchList } = this.props;
    return <ul className="searchList hide">{getSearchList(searchList)}</ul>;
  }
}

export default SearchList;
