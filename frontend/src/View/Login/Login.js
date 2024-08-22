import React, { useState } from "react";
import "./Login.css";
import logo from "./../../assets/Login/logo.jpg";
import loginLogo from "./../../assets/Login/login-logo.jpg";
import emailImg from "./../../assets/Login/login-email.jpg";
import passImg from "./../../assets/Login/login-pass.jpg";
import Navbar from "../../Component/Navbar/Navbar";
import Footer from "../../Component/Footer/Footer";

function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  return (
    <div>
      <Navbar />

      <div className="login">
        <form action="" className="login-form">
          <div className="login-imgs">
            <img src={logo} alt="logo" className="login-img" />
            <img
              src={loginLogo}
              alt="head-logo"
              className="login-img login-logo"
            />
          </div>

          <h1 className="login-form-h">Log In</h1>

          <div className="login-inputs">
            <img src={emailImg} alt="" className="login-inputs-img" />
            <input
              type="email"
              placeholder="Admin"
              className="login-form-input"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>

          <div className="login-inputs">
            <img src={passImg} alt="" className="login-inputs-img" />
            <input
              type="password"
              placeholder="pass"
              className="login-form-input"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>

          <input type="submit" value="Log In" className="login-form-submit" />
        </form>
      </div>

      <Footer />
    </div>
  );
}

export default Login;
