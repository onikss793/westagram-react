import React, { Component } from "react";

class CommentList extends Component {
  render() {
    const { commentInfo } = this.props;

    return (
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
    );
  }
}

export default CommentList;
