import React, { Component } from "react";
import "./PostTools.scss";

class PostTools extends Component {
  render() {
    return (
      <div className="tools">
        <button>
          <div className="heart-img" />
        </button>
        <button>
          <div className="comment-img" />
        </button>
        <button className="share">
          <div className="share-img" />
        </button>
      </div>
    );
  }
}

export default PostTools;
