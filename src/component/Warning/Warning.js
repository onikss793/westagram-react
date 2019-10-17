import React, { Component } from "react";
import "./Warning.scss";

class Warning extends Component {
  renderWarning = () => {
    const state = this.props.state;
    if (state) {
      return <div className="warning">ID를 입력하십시오</div>;
    } else {
      return <div className="warning hide">ID를 입력하십시오</div>;
    }
  };

  render() {
    const { renderWarning } = this;
    return renderWarning();
  }
}

export default Warning;
