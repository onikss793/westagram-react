import React, { Component } from "react";

class MainDesc extends Component {
  render() {
    const { mainDesc } = this.props;
    return (
      <div>
        <span>
          <b>{mainDesc.userId}</b>
        </span>
        <span>{mainDesc.desc}</span>
      </div>
    );
  }
}

export default MainDesc;
