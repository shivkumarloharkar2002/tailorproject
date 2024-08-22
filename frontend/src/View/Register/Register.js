import React, { useState, useEffect } from "react";
import "./Register.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
// import UserCard from "../../Component/Register/UserCard";
import logo from "./../../assets/Login/login-email.png";
import Navbar from "./../../Component/Navbar/Navbar";

function Register() {
  const [username, setUserName] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [password, setPassword] = useState();
  const [user_id, setUser_id] = useState();
  const [role, setRole] = useState();
  const [id, setId] = useState();
  const [edit, setEdit] = useState(false);
  const navigate = useNavigate();

  const saveNote = async () => {
    if (edit === true) {
      try {
        const registerData = await axios.put(
          `http://localhost:5555/api/userroutes/updateuser`,
          {
            username,
            email,
            password,
            phone,
            user_id,
            role,
          }
        );
        if (registerData.status === 200) {
          navigate("/choosefabric");
          alert("Update Successfully");
          console.log(registerData);
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      try {
        const registerData = await axios.post(
          `http://localhost:5555/api/userroutes/create`,
          {
            username,
            email,
            password,
            phone,
            user_id,
            role,
          }
        );
        if (registerData.status === 200) {
          navigate("/choosefabric");
          alert("Register Successfully");
          console.log(registerData);
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  const Edit = async (item) => {
    setUserName(item.username);
    setEmail(item.email);
    setPhone(item.phone);
    setPassword(item.password);
    setUser_id(item.user_id);
    setRole(item.role);
    // setId(item.id);

    setEdit(true);
  };

  const [getUserData, setGetUserData] = useState([]);

  const getUser = async () => {
    const getNote = await axios.get(
      "http://localhost:5555/api/userroutes/getallusers"
    );
    setGetUserData(getNote.data.data);
    console.log(getNote);
  };

  const DeleteUser = async (item) => {
    {
      const { id } = item._id;
      await axios.delete(
        `http://localhost:5555/api/userroutes/deleteuser/${id}`
      );
      getUser();
    }
    alert("Delete Successfully");
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <div>
      {/* Navbar */}
      <Navbar />

      <div className="register">
        <div className="available-user register-box">
          <h1 className="register-head">Available User</h1>

          {getUserData.map((item) => {
            return (
              <>
                <div className="userCard">
                  <div className="userCard-Info">
                    <img src={logo} alt="" className="userCard-img" />
                    <p className="userCard-para">
                      {item.role} <br />
                      <span className="userCard-span">{item.email}</span>
                    </p>
                  </div>

                  <div className="userCard-btns">
                    <button
                      className="userCard-button edit"
                      onClick={() => {
                        Edit(item);
                      }}
                    >
                      Edit
                    </button>
                    <button
                      className="userCard-button remove"
                      onClick={() => {
                        DeleteUser(item);
                      }}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </>
            );
          })}
        </div>

        <div className="user-form register-box">
          <h1 className="register-head">Users Form</h1>

          <form action="" className="register-form">
            <input
              type="text"
              placeholder="Full Name"
              className="register-form-input"
              required
              value={username}
              onChange={(e) => {
                setUserName(e.target.value);
              }}
            />

            <input
              type="email"
              placeholder="Email Id"
              className="register-form-input"
              required
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />

            <input
              type="number"
              placeholder="Phone No."
              className="register-form-input"
              required
              value={phone}
              onChange={(e) => {
                setPhone(e.target.value);
              }}
            />

            <input
              type="password"
              placeholder="Password"
              className="register-form-input"
              required
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />

            <input
              type="number"
              placeholder="User Id"
              className="register-form-input"
              required
              value={user_id}
              onChange={(e) => {
                setUser_id(e.target.value);
              }}
            />

            <select
              name=""
              id=""
              required
              className="register-form-input register-form-select"
              value={role}
              onChange={(e) => {
                setRole(e.target.value);
              }}
            >
              <option value="">Select Role</option>
              <hr />
              <option value="employee">employee</option>
              <option value="admin">admin</option>
            </select>

            {edit === false ? (
              <button
                type="submit"
                className="register-form-submit"
                onClick={saveNote}
              >
                Add
              </button>
            ) : (
              <button
                type="submit"
                className="register-form-submit"
                onClick={saveNote}
              >
                Update
              </button>
            )}
          </form>
        </div>
      </div>

      {/* footer */}
    </div>
  );
}

export default Register;
