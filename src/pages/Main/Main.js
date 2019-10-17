import React, { Component } from "react";
import Nav from "../../component/Nav/Nav";
import Post from "../../component/Post/Post";
import Story from "../../component/Story/Story";
import Suggestion from "../../component/Suggestion/Suggestion";
import "./Main.scss";
import "../../style/common.scss";

class Main extends Component {
  render() {
    return (
      <div className="main-container">
        <Nav />
        <div className="main-align">
          <div className="post-story-align">
            <Post />
            <div className="story-suggestion-align">
              <Story className="story-container" />
              <Suggestion />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
