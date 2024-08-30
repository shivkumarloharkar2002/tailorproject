import React from "react";
import Header from "../../Component/Header/Header";
import back from "./../../assets/Back/back.jpg";
import "./Profile.css";
import { Link } from "react-router-dom";
import img from "./../../assets/Login/login-email.png";

function Profile() {
  const profileData = JSON.parse(localStorage.getItem("user"));
  console.log(profileData);

  return (
    <div>
      <Header />
      <Link to={"/home"} className="link">
        <div className="profile-back">
          <img src={back} alt="" className="profile-back-img" />
        </div>
      </Link>

      <h1 className="profile-head">Profile</h1>

      <div className="profile-box">
        <img src={profileData.img} alt="" className="profile-box-img" />
        <div className="profile-box-para">
          <h2 className="profile-box-para-head">
            Name: {profileData.username}
          </h2>
          <h2 className="profile-box-para-head">Email: {profileData.email}</h2>
          <h2 className="profile-box-para-head">Phone: {profileData.phone}</h2>
          <h2 className="profile-box-para-head">Role: {profileData.role}</h2>
        </div>
      </div>
    </div>
  );
}

export default Profile;
