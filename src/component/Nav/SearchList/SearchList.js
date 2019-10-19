import React, { Component } from "react";
import "./SearchList.scss";

class SearchList extends Component {
  constructor() {
    super();
    this.state = {
      inputVal: ""
    };
  }
  idCount = 0;

  getSearchList = list => {
    let { idCount } = this;
    const inputVal = this.props.inputVal;
    let matched = [];
    let unMatched = [];
    for (let i = 0; i < list.length; i++) {
      if (list[i].startsWith(inputVal)) {
        matched.push(list[i]);
      } else {
        unMatched.push(list[i]);
      }
    }
    return matched.map(el => {
      let matchedEl;
      let unMatchedEl;
      idCount++;
      if (el.startsWith(inputVal)) {
        matchedEl = el.slice(0, inputVal.length);
        unMatchedEl = el.slice(inputVal.length);
      } else {
        unMatchedEl = el;
      }
      return (
        <li key={idCount}>
          <span className="inputMatch">{matchedEl}</span>
          {unMatchedEl}
        </li>
      );
    });
  };

  render() {
    const { getSearchList } = this;
    const { searchList } = this.props;
    const { searchListClass } = this.props;

    return <ul className={searchListClass}>{getSearchList(searchList)}</ul>;
  }
}

export default SearchList;
