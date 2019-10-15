import React, { Component } from "react";

class PostImage extends Component {
  render() {
    const { postImageUrl } = this.props;
    return (
      <div className="main-image">
        <img className="post-image" src={postImageUrl} alt="mainImage" />
      </div>
    );
  }
}

export default PostImage;
