import React, { Component } from "react";
import User from "../User/User";
import Comments from "../Comments/Comments";
import PostTools from "./PostTools";
import PostImage from "./PostImage";
import CommentsData from "../Comments/CommentsData";
import "./Post.scss";
import "../../style/common.scss";

class Post extends Component {
  constructor() {
    super();
    this.state = {
      post: {
        userInfo: {
          userId: "wecode_bootcamp",
          img:
            "https://scontent-icn1-1.cdninstagram.com/vp/91a4a6cf425350138a196ba4df885b9b/5DFE2D10/t51.2885-19/s150x150/64219646_866712363683753_7365878438877462528_n.jpg?_nc_ht=scontent-icn1-1.cdninstagram.com"
        },
        imageUrl:
          "https://scontent-gmp1-1.cdninstagram.com/vp/7dd7d8e61047035d530ec7b8785e0e28/5E2E6E48/t51.2885-15/e35/69366856_2154583161509048_6271804732968189983_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_cat=1",
        mainDesc: {
          userId: "wecode_bootcamp",
          desc: "저희 수강생이랍니다. ",
          timeStamp: "42분전"
        },
        commentInfo: CommentsData
      }
    };
  }
  createNewComment = data => {
    const { commentInfo } = this.state.post;
    this.setState({
      commentInfo: commentInfo.push(data)
    });
  };

  render() {
    const { createNewComment } = this;
    const { userInfo, imageUrl, mainDesc, commentInfo } = this.state.post;
    return (
      <div className="feeds">
        <User userInfo={userInfo} />
        <PostImage postImageUrl={imageUrl} />
        <PostTools />
        <Comments
          onCreate={createNewComment}
          commentInfo={commentInfo}
          mainDesc={mainDesc}
        />
      </div>
    );
  }
}

export default Post;
