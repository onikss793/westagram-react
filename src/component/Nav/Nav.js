import React, { Component } from "react";
import SearchList from "./SearchList/SearchList";
import "./Nav.scss";
import NavRight from "./NavRight/NavRight";
import TextLogo from "./TextLogo";

const data = [
  "wecode",
  "wecoder",
  "wework",
  "walmart",
  "apple",
  "mushroom",
  "react",
  "javascript",
  "happy",
  "frontend",
  "backend"
];

class Nav extends Component {
  constructor() {
    super();
    this.state = {
      inputVal: "",
      className: ["searchList", "hide"],
      searchList: data
    };
  }

  handleChange = e => {
    const textVal = e.target.value;
    this.setState({ inputVal: textVal }, () => {
      const { inputVal } = this.state;
      this.setState({
        className: inputVal.length > 0 ? ["searchList"] : ["searchList", "hide"]
      });
    });
  };

  render() {
    const { inputVal, className, searchList } = this.state;
    const { handleChange } = this;

    return (
      <div className="nav">
        <div className="nav-align">
          <TextLogo />
          <form className="searchForm">
            <input
              value={inputVal}
              onChange={handleChange}
              type="text"
              placeholder="입력"
            />
            <SearchList
              inputVal={inputVal}
              searchList={searchList}
              searchListClass={className.join(" ")}
            />
          </form>
          <NavRight />
        </div>
      </div>
    );
  }
}

export default Nav;
