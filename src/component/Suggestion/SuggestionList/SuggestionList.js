import React, { Component } from "react";
import "./SuggestionList.scss";

class SuggestionList extends Component {
  render() {
    const { suggestionInfo } = this.props;
    return (
      <ul className="suggestion-list">
        {suggestionInfo.map((el, i) => {
          return (
            <li key={i}>
              <div className="suggestion-image">
                <img src={el.imgUrl} alt={el.userId} />
              </div>
              <span className="suggestion-id">{el.userId}</span>
              <span className="suggestion-follow">팔로우</span>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default SuggestionList;
