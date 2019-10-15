import React, { Component } from "react";
import "../style/User.css";

class User extends Component {
  render() {
    const { userInfo } = this.props;
    return (
      <div className="user">
        <img src={userInfo.img} alt={userInfo.userId} />
        <span className="userId">{userInfo.userId}</span>
      </div>
    );
  }
}

export default User;
