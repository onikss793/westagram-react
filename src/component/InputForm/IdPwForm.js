import React, { Component } from "react";
import InputBox from "./InputBox";
import Warning from "../Warning/Warning";
import { withRouter } from "react-router-dom";
import "./IdPwForm.scss";

class IdPwForm extends Component {
  constructor() {
    super();
    this.state = {
      placeholder: { id: "전화번호, 사용자 이름 또는 이메일", pw: "비밀번호" },
      type: { id: "text", pw: "password" },
      idActive: false,
      pwActive: false,
      warning: false,
      idValue: "",
      pwValue: ""
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

  login = () => {
    fetch("http://localhost:8000/account/login", {
      method: "post",
      body: JSON.stringify({
        user_name: this.state.idValue,
        password: this.state.pwValue
      })
    })
      .then(res => res.json())
      .then(res => {
        const { history } = this.props;
        if (res.message === "success") {
          localStorage.setItem("userToken", res.token);
          history.push("/main");
        } else {
          console.log(res.message);
          //window.location.reload();
        }
      });
  };

  makeWarning = () => {
    const { idActive } = this.state;
    idActive
      ? this.setState({ warning: false })
      : this.setState({ warning: true });
  };

  handleSubmit = e => {
    e.preventDefault();
  };

  updateInputVal = (name, textValue) => {
    this.setState({
      [name]: textValue
    });
  };

  render() {
    const { placeholder, type, warning, idActive, pwActive } = this.state;
    const {
      idActivate,
      pwActivate,
      handleSubmit,
      login,
      updateInputVal
    } = this;
    return (
      <form onSubmit={handleSubmit} className="idPasswordForm">
        <InputBox
          placeholder={placeholder.id}
          type={type.id}
          active={idActivate}
          name="idValue"
          loginCheck={updateInputVal}
        />
        <Warning state={warning} />
        <InputBox
          placeholder={placeholder.pw}
          type={type.pw}
          active={pwActivate}
          name="pwValue"
          loginCheck={updateInputVal}
        />
        <button
          className={idActive && pwActive ? "active" : "btnLogIn"}
          onClick={login}
        >
          로그인
        </button>
      </form>
    );
  }
}

export default withRouter(IdPwForm);
