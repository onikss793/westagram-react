import React, { Component } from "react";

class CommentList extends Component {
  shouldComponentUpdate = nextProps => {
    const { commentInfo } = this.props;
    if (nextProps.commentInfo === commentInfo) {
      return false;
    } else {
      return true;
    }
  };

  render() {
    const { commentInfo } = this.props;
    return (
      <ul>
        {commentInfo.map((el, i) => {
          return (
            <li key={i} className="comment">
              <span className="post-user">
                <b>{el.user_name}</b>
              </span>
              <span>{el.comment_text}</span>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default CommentList;
