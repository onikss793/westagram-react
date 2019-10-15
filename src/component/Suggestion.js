import React, { Component } from "react";
import "../style/Suggestion.css";

class Suggestion extends Component {
  idCount = 0;
  renderSuggestionList = list => {
    let { idCount } = this;
    return list.map(el => {
      idCount++;
      return (
        <li key={idCount}>
          <div className="suggestion-image">
            <img src={el.imgUrl} alt={el.userId} />
          </div>
          <span className="suggestion-id">{el.userId}</span>
          <span className="suggestion-follow">팔로우</span>
        </li>
      );
    });
  };

  render() {
    const { suggestionInfo } = this.props;
    const { renderSuggestionList } = this;
    return (
      <div className="right-suggestion">
        <div className="right-suggestion-nav">
          <span className="suggestion-nav-left">회원님을 위한 추천</span>
          <span className="suggestion-nav-right">모두 보기</span>
        </div>
        <div className="suggestion-container">
          <ul className="suggestion-list">
            {renderSuggestionList(suggestionInfo)}
          </ul>
        </div>
      </div>
    );
  }
}

export default Suggestion;
