import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CookiesProvider } from "react-cookie";
import "./index.css";
import Home from "./components/Home";
import Signup from "./components/signup/Signup";
import Login from "./components/signup/Login";
import NotFound from "./components/NotFound";



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
     <CookiesProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/signup" element={ <Signup/> } />
        <Route path="/login" element={ <Login/> } />

        <Route path="/*" element={ <Home /> } />

      </Routes>
    </BrowserRouter>
    </CookiesProvider>
  // {/* </React.StrictMode> */}
);
