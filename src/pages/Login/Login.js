import React, { Component } from "react";
import IdPwForm from "../../component/InputForm/IdPwForm";
import "../../style/common.scss";
import "./Login.scss";
import InstagramLogo from "./InstagramLogo";
import ForgetPw from "./ForgetPw";

class Login extends Component {
  render() {
    return (
      <div className="logInContainer">
        <InstagramLogo />
        <IdPwForm />
        <ForgetPw />
      </div>
    );
  }
}

export default Login;
