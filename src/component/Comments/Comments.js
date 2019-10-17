import React, { Component } from "react";
import "./Comments.scss";
//import CommentList from "./CommentList";

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
          <ul>
            <li>
              <span>
                <b>{mainDesc.userId}</b>
              </span>
              <span>{mainDesc.desc}</span>
            </li>
          </ul>
          <ul>
            {commentInfo.map((el, i) => {
              return (
                <li key={i} className="comment">
                  <span className="post-user">
                    <b>{el.userId}</b>
                  </span>
                  <span>{el.desc}</span>
                </li>
              );
            })}
          </ul>
          <span className="main-timeline">{mainDesc.timeStamp}</span>
        </div>
        <form className="comment-form" onSubmit={handelSubmit}>
          <input
            value={desc}
            onChange={handleChange}
            className="comment-input"
            placeholder="댓글 달기..."
          />
          <button className="comment-post">게시</button>
        </form>
      </>
    );
  }
}

export default Comments;
