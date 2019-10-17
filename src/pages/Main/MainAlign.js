import React, { Component } from "react";
import Post from "../../component/Post/Post";
import Story from "../../component/Story/Story";
import Suggestion from "../../component/Suggestion/Suggestion";
import "./Main.scss";
import "../../style/common.scss";

class MainAlign extends Component {
  render() {
    return (
      <div className="main-align">
        <div className="post-story-align">
          <Post />
          <div className="story-suggestion-align">
            <Story className="story-container" />
            <Suggestion />
          </div>
        </div>
      </div>
    );
  }
}

export default MainAlign;
