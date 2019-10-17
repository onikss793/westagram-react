import React, { Component, Fragment } from "react";
import User from "../User/User";
import StoryContent from "../Story/StoryContent";
import "./Story.scss";

class Story extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    const { storyContentInfo } = this.props;
    return (
      <Fragment>
        <div className="main-right-align">
          <User className="story-user" />
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
      </Fragment>
    );
  }
}

export default Story;
