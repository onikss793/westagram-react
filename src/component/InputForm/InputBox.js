import React, { Component } from "react";

class InputBox extends Component {
  constructor() {
    super();
    this.state = {
      textValue: "",
      active: false
    };
  }

  handleChange = e => {
    this.setState({ textValue: e.target.value }, () => {
      const { textValue } = this.state;
      if (textValue.length > 0) {
        this.setState({ active: true }, () => {
          const { active, loginCheck, name } = this.props;
          const { textValue } = this.state;
          active(this.state.active);
          loginCheck(name, textValue);
        });
      } else {
        this.setState({ active: false }, () => {
          const { active, loginCheck, name } = this.props;
          const { textValue } = this.state;
          active(this.state.active);
          loginCheck(name, textValue);
        });
      }
    });
  };

  render() {
    const { placeholder, type, name } = this.props;
    const { textValue } = this.state;
    const { handleChange } = this;
    return (
      <input
        name={name}
        className="logInput"
        placeholder={placeholder}
        type={type}
        value={textValue}
        onChange={handleChange}
      />
    );
  }
}

export default InputBox;
