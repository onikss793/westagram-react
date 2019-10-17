import React, { Component } from "react";
import InputBox from "./InputBox";
import Warning from "../Warning/Warning";
import { withRouter } from "react-router-dom";
import "../../style/common.scss";

class IdPwForm extends Component {
  constructor() {
    super();
    this.state = {
      placeholder: { id: "전화번호, 사용자 이름 또는 이메일", pw: "비밀번호" },
      type: { id: "text", pw: "password" },
      idActive: false,
      pwActive: false,
      warning: false,
      loginCheck: true
    };
  }

  idActivate = state => {
    state
      ? this.setState({ idActive: true }, () => {
          const { makeWarning } = this;
          makeWarning();
        })
      : this.setState({ idActive: false }, () => {
          const { makeWarning } = this;
          makeWarning();
        });
  };

  pwActivate = state => {
    state
      ? this.setState({ pwActive: true })
      : this.setState({ pwActive: false });
  };

  goToMain = () => {
    const { loginCheck } = this.state;
    loginCheck ? this.props.history.push("/main") : window.location.reload();
  };

  makeWarning = () => {
    const { idActive } = this.state;
    if (idActive === true) {
      this.setState({ warning: false });
    } else {
      this.setState({ warning: true });
    }
  };

  handleSubmit = e => {
    e.preventDefault();
  };

  render() {
    const { placeholder, type, warning, idActive, pwActive } = this.state;
    const { idActivate, pwActivate, handleSubmit, goToMain } = this;
    return (
      <form onSubmit={handleSubmit} className="idPasswordForm">
        <InputBox
          placeholder={placeholder.id}
          type={type.id}
          active={idActivate}
          name="idValue"
        />
        <Warning state={warning} />
        <InputBox
          placeholder={placeholder.pw}
          type={type.pw}
          active={pwActivate}
          name="pwValue"
        />
        <button
          className={idActive && pwActive ? "active" : "btnLogIn"}
          onClick={goToMain}
        >
          로그인
        </button>
      </form>
    );
  }
}

export default withRouter(IdPwForm);
