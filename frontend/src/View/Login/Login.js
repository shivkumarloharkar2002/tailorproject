import React, { useState } from "react";
import "./Login.css";
import logo from "./../../assets/Login/logo.png";
import loginLogo from "./../../assets/Login/login-logo.jpg";
import emailImg from "./../../assets/Login/login-email.jpg";
import passImg from "./../../assets/Login/login-pass.jpg";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const loginData = async (e) => {
    e.preventDefault();
    try {
      const logData = await axios.post(
        `http://localhost:5555/api/userroutes/login`,
        {
          email,
          password,
        } 
      );
      if (logData.status === 200) {
        localStorage.setItem("user", JSON.stringify(logData.data.data));
        toast("Login Successfully");
        navigate("/home");
        console.log(logData);
      }
    } catch {
      toast.error("Invalid Email or Password");
    }
  };

  return (
    <div>
      <div className="login">
        <form action="" className="login-form" onSubmit={loginData}>
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
              required
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>

          <div className="login-inputs">
            <img src={passImg} alt="" className="login-inputs-img" />
            <input
              type="password"
              placeholder="Password"
              className="login-form-input"
              required
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>

          <input
            type="submit"
            value="Log In"
            className="login-form-submit"
            // onClick={loginData}
          />
        </form>
        <ToastContainer />
      </div>
    </div>
  );
}

export default Login;
