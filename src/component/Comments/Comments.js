import React, { Component } from "react";
import "./Comments.scss";
import CommentList from "./CommentList";
import CommentForm from "./CommentForm";
import MainDesc from "./MainDesc";

class Comments extends Component {
  idCount = 0;
  constructor() {
    super();
    this.state = {
      comments: {
        userId: "wecode_bootcamp",
        desc: ""
      }
    };
  }

  handleChange = e => {
    if (e.target.value.length > 0) {
      document
        .querySelector(".comment-post")
        .classList.add("comment-post-active");
    } else {
      document
        .querySelector(".comment-post")
        .classList.remove("comment-post-active");
    }

    this.setState({
      comments: {
        userId: "wecode_bootcamp",
        desc: e.target.value
      }
    });
  };

  handelSubmit = e => {
    e.preventDefault();
    this.props.onCreate(this.state.comments);
    this.setState({ comments: { userId: "wecode_bootcamp", desc: "" } });
  };

  render() {
    const { mainDesc, commentInfo } = this.props;
    const { handleChange, handelSubmit } = this;
    const { desc } = this.state.comments;
    return (
      <>
        <div className="comments">
          <MainDesc mainDesc={mainDesc} />
          <CommentList commentInfo={commentInfo} />
          <span className="main-timeline">{mainDesc.timeStamp}</span>
        </div>
        <CommentForm
          onSubmit={handelSubmit}
          value={desc}
          onChange={handleChange}
        />
      </>
    );
  }
}

export default Comments;
