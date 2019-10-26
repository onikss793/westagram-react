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
      },
      commentInfo: []
    };
    this.getComments();
  }

  getComments = () => {
    fetch("http://localhost:8000/main")
      .then(res => res.json())
      .then(res => {
        this.setState({ commentInfo: res });
      });
  };

  updateComments = () => {
    fetch("http://localhost:8000/main", {
      method: "post",
      headers: { Authorization: localStorage.getItem("userToken") },
      body: JSON.stringify({
        comment_text: this.state.comments.desc
      })
    })
      .then(res => res.json())
      .then(() => this.getComments());
  };

  handleChange = e => {
    e.target.value.length > 0
      ? document
          .querySelector(".comment-post")
          .classList.add("comment-post-active")
      : document
          .querySelector(".comment-post")
          .classList.remove("comment-post-active");

    this.setState({
      comments: {
        userId: "wecode_bootcamp",
        desc: e.target.value
      }
    });
  };

  handelSubmit = e => {
    e.preventDefault();
    const { updateComments } = this;
    updateComments();
    this.setState({ comments: { userId: "wecode_bootcamp", desc: "" } });
  };

  render() {
    const { mainDesc } = this.props;
    const { handleChange, handelSubmit } = this;
    const { comments, commentInfo } = this.state;
    return (
      <>
        <div className="comments">
          <MainDesc mainDesc={mainDesc} />
          <CommentList commentInfo={commentInfo} />
          <span className="main-timeline">{mainDesc.timeStamp}</span>
        </div>
        <CommentForm
          onSubmit={handelSubmit}
          value={comments.desc}
          onChange={handleChange}
        />
      </>
    );
  }
}

export default Comments;
