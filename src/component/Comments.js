import React, { Component, Fragment } from "react";
import "../style/Comments.css";

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

  renderCommentList = list => {
    let { idCount } = this;
    return list.map(el => {
      idCount++;
      return (
        <li key={idCount} className="comment">
          <span className="post-user">
            <b>{el.userId}</b>
          </span>
          <span>{el.desc}</span>
        </li>
      );
    });
  };

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
  };

  render() {
    const { mainDesc, commentInfo } = this.props;
    const { renderCommentList, handleChange, handelSubmit } = this;
    return (
      <Fragment>
        <div className="comments">
          <ul>
            <li className="main-desc">
              <span className="post-user">
                <b>{mainDesc.userId}</b>
              </span>
              <span className="post-desc">{mainDesc.desc}</span>
            </li>
          </ul>
          <ul>{renderCommentList(commentInfo)}</ul>
          <span className="main-timeline">{mainDesc.timeStamp}</span>
        </div>
        <form className="comment-form" onSubmit={handelSubmit}>
          <input
            onChange={handleChange}
            className="comment-input"
            placeholder="댓글 달기..."
          />
          <button className="comment-post">게시</button>
        </form>
      </Fragment>
    );
  }
}

export default Comments;
