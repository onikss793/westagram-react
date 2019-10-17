import React, { Component } from "react";
import "./User.scss";

class User extends Component {
  constructor() {
    super();
    this.state = {
      userInfo: {
        userId: "wecode_bootcamp",
        img:
          "https://scontent-icn1-1.cdninstagram.com/vp/91a4a6cf425350138a196ba4df885b9b/5DFE2D10/t51.2885-19/s150x150/64219646_866712363683753_7365878438877462528_n.jpg?_nc_ht=scontent-icn1-1.cdninstagram.com"
      }
    };
  }

  render() {
    const { img, userId } = this.state.userInfo;
    return (
      <div className="user">
        <img src={img} alt={userId} />
        <span className="userId">{userId}</span>
      </div>
    );
  }
}

export default User;
