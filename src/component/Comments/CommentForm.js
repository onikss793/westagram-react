import React, { Component } from "react";

class CommentForm extends Component {
  render() {
    const { value, onChange, onSubmit } = this.props;
    return (
      <form className="comment-form" onSubmit={onSubmit}>
        <input
          value={value}
          onChange={onChange}
          className="comment-input"
          placeholder="댓글 달기..."
        />
        <button className="comment-post">게시</button>
      </form>
    );
  }
}

export default CommentForm;
