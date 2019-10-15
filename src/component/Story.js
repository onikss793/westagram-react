import React, { Component, Fragment } from "react";
import User from "../component/User";
import StoryContent from "../component/StoryContent";
import "../style/Story.css";

class Story extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    const { userInfo, storyContentInfo } = this.props;
    return (
      <Fragment>
        <div className="main-right-align">
          <User className="story-user" userInfo={userInfo} />
          <div className="right-story">
            <div className="right-story-box">
              <div className="right-story-nav">
                <span>스토리</span>
                <span>모두 보기</span>
              </div>
              <div className="story-content">
                <StoryContent storyContentInfo={storyContentInfo} />
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Story;
