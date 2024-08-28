import React, { useState, useEffect } from "react";
import "./Register.css";
import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import UserCard from "../../Component/Register/UserCard";
import logo from "./../../assets/Login/login-email.png";
// import Navbar from "./../../Component/Navbar/Navbar";
import Header from "../../Component/Header/Header";

function Register() {
  const [username, setUserName] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [password, setPassword] = useState();
  const [user_id, setUser_id] = useState();
  const [role, setRole] = useState();
  // const [id, setId] = useState();
  const [edit, setEdit] = useState(false);

  const[img,setImg]=useState('')

  const saveNote = async (e) => {
    e.preventDefault();

    if (edit === true) {
      try {
        const registerData = await axios.put(
          `http://localhost:5555/api/userroutes/updateuser`,
          {
            username,
            email,
            password,
            phone,
            role,
            user_id,
          }
        );
        getUser();
        alert("Update Successfully");
        console.log(registerData);
      } catch (error) {
        alert(error);
      }
    } else {

      const createData = new FormData()
      createData.append("username", username);
      createData.append("email", email);
      createData.append("password", password);
      createData.append("phone", phone);
      createData.append("username", username);
      createData.append("img", img);
      try {
        const registerData = await axios.post(
          `http://localhost:5555/api/userroutes/create`,
          // {
          //   username,
          //   email,
          //   password,
          //   phone,
          //   role,
          // }

          createData,
          {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          }
        );
        getUser();
        console.log(registerData)
        // if (registerData.status === 200) {
        alert("Register Successfully");
        console.log(registerData);
        // }
      } catch (error) {
        alert(error);
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
    // setId(item._id);

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
      const id = item.user_id;
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
      <Header />
      <div className="register">
        <div className="available-user register-box">
          <h1 className="register-head">Available User</h1>

          {getUserData.map((item) => {
            if (item.role == "employee") {
              return (
                <>
                  <div className="userCard">
                    <div className="userCard-Info">
                      <img src={logo} alt="" className="userCard-img" />
                      <p className="userCard-para">
                        {item.username} <br />
                        <span className="userCard-span">{item.role}</span>
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
            } else {
              return (
                <>
                  <div className="userCard">
                    <div className="userCard-Info">
                      <img src={logo} alt="" className="userCard-img" />
                      <p className="userCard-para">
                        {item.username} <br />
                        <span className="userCard-span">{item.role}</span>
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
                    </div>
                  </div>
                </>
              );
            }
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

            <label className='fab_label '> Image </label>:
            <input type='file' placeholder='Fabric Image ' className='fab_input ' name='imgfile'
              onChange={(e) => {
                setImg(e.target.files[0])
                console.log(e.target.files[0])
              }}
            /><br />

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
