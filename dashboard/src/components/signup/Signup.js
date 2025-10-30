import React, { useState } from "react";
import "./Auth.css"; 
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import HomeIcon from '@mui/icons-material/Home';

import "react-toastify/dist/ReactToastify.css";

const Signup = () => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
    username: "",
  });

  const { email, password, username } = inputValue;

  const handelHome=()=>{
    window.location.href = `${process.env.REACT_APP_FRONTEND_URL}`;
  }

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue({ ...inputValue, [name]: value });
  };

  const handleSuccess = (msg) =>
    toast.success(msg, {
      position: "bottom-right",
  });
  
  const handleError = (err) =>
    toast.error(err, {
      position: "bottom-left",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/signup`, // ✅ Backend API
        {...inputValue},
        { withCredentials: true }
      );
      const { success, message } = data;

      if (success) {
        handleSuccess(message);
        setTimeout(() => {
          navigate("/login");
        }, 1000);
      }else {
        handleError(message);
      }
    } catch (err) {
      console.log(err);
    }

    setInputValue({ 
      ...inputValue,
      email: "", 
      password: "", 
      username: "" 
    });
  };

  return (
    <div className="auth-wrapper">
      <div className="form_container">
        <h2>Create Account</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email">Email</label>
            <input 
              type="email" 
              name="email" 
              value={email}                  
              placeholder="Enter your Email"
              onChange={handleOnChange} 
              required 
            />
          </div>

          <div>
            <label htmlFor="username">Username</label>
            <input 
              type="text" 
              name="username" 
              value={username} 
              placeholder="Enter your Username"
              onChange={handleOnChange} 
              required 
            />
          </div>

          <div>
            <label htmlFor="password">Password</label>
            <input 
              type="password" 
              name="password" 
              value={password}
              placeholder="Set a Password" 
              onChange={handleOnChange} 
              required 
            />
          </div>

          <button type="submit">Signup</button>
          <span>
            Already have an account? <Link to="/login">Login</Link>
          </span>
        </form>
        <button className="homeBtn" onClick={handelHome}>
          <HomeIcon/>
        </button>

        <ToastContainer />
      </div>
    </div>
  );
};

export default Signup;
