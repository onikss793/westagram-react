import React, { Component } from "react";
import "../style/StoryContent.css";

class StoryContent extends Component {
  idCount = 0;

  renderStoryList = list => {
    let { idCount } = this;
    return list.map(el => {
      idCount++;
      return (
        <li key={idCount}>
          <img className="storyUser" src={el.imgUrl} alt={el.userInfo} />
          <span className="story-user">{el.userInfo}</span>
          <span className="story-timeline">{el.timeStamp}</span>
        </li>
      );
    });
  };

  render() {
    const { renderStoryList } = this;
    const { storyContentInfo } = this.props;

    return <ul className="story-list">{renderStoryList(storyContentInfo)}</ul>;
  }
}

export default StoryContent;
