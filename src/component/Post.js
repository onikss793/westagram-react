import React, { Component } from "react";
import User from "../component/User";
import Comments from "../component/Comments";
import PostTools from "../component/PostTools";
import PostImage from "../component/PostImage";
import "../style/Post.css";
import "../style/common.css";

class Post extends Component {
  onCreate = data => {
    this.props.onCreate(data);
  };

  render() {
    const {
      userInfo,
      postImageUrl,
      mainDesc,
      commentInfo,
      onCreate
    } = this.props;
    return (
      <div className="feeds">
        <User userInfo={userInfo} />
        <PostImage postImageUrl={postImageUrl} />
        <PostTools />
        <Comments
          onCreate={onCreate}
          commentInfo={commentInfo}
          mainDesc={mainDesc}
        />
      </div>
    );
  }
}

export default Post;
