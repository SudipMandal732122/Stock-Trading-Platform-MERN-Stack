import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Dashboard from "./Dashboard";
import TopBar from "./TopBar";

axios.defaults.withCredentials = true; // ✅ IMPORTANT

const Home = () => {
  const navigate = useNavigate();
  const [cookies, removeCookie] = useCookies([]);
  const [userInfo, setUsername] = useState({userName:"",email:""});

  useEffect(() => {
    const verifyUser = async () => {
      try {
        const { data } = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/`, {});
        if (!data.status) {
          removeCookie("token");
          navigate("/login");
        } else {
          setUsername({...data.user});
          // toast.success(`Welcome ${data.user}`);
        }
      } catch (error) {
        console.log(error);
        navigate("/login");
      }
    };

    verifyUser();
  }, [cookies,navigate, removeCookie]);

  const logoutHandler = async () => {
    await axios.post(`${process.env.REACT_APP_BACKEND_URL}/logout`);
    removeCookie("token");
    window.location.href = `${process.env.REACT_APP_FRONTEND_URL}`;
  };

  return (
    <>
      <TopBar logoutHandler={logoutHandler} userInfo={userInfo} />
      <Dashboard  username={userInfo.userName} />
      <ToastContainer />
    </>
  );
};

export default Home;
