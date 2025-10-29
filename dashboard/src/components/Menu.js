import React, { useState } from "react"; 

import { Link } from "react-router-dom";
import LogoutIcon from '@mui/icons-material/Logout';

const Menu = ({logoutHandler, userInfo}) => {
  const [selectMenu,setSelectMenu]=useState(0);

  const [isProfileDropdownOpen,setIsProfileDropdownOpen]=useState(false);

  const handelManuClick=(index)=>{
    setSelectMenu(index);
  };

  const handleProfileClick=()=>{
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
    // console.log("Profile Clicked");
    // console.log(isProfileDropdownOpen);
  };

  const menuClass= "menu" ;
  const activeMenuClass= "menu selected";

  return (
    <>
    <div className="menu-container">
      <img src="logo.png" style={{ width: "25px" }} />
      <div className="menus">
        <ul>
          <li>
            <Link  
              style={{ textDecoration:"none"}} 
              to="/"
              onClick={()=>handelManuClick(0)}
            >
              <p className={selectMenu===0 ? activeMenuClass : menuClass} >Dashboard</p>        
            </Link>
            
          </li>
          <li>
            <Link  
              style={{ textDecoration:"none"}} 
              to="/orders"
              onClick={()=>handelManuClick(1)}
            >
              <p className={selectMenu===1 ? activeMenuClass : menuClass} >Orders</p>        
            </Link>
          </li>
          <li>
            <Link  
              style={{ textDecoration:"none"}} 
              to="/holdings"
              onClick={()=>handelManuClick(2)}
            >
              <p className={selectMenu===2 ? activeMenuClass : menuClass} >Holdings</p>        
            </Link>
          </li>
          <li>
            <Link  
              style={{ textDecoration:"none"}} 
              to="/positions"
              onClick={()=>handelManuClick(3)}
            >
              <p className={selectMenu===3 ? activeMenuClass : menuClass} >Positions</p>        
            </Link>
          </li>
          <li>
            <Link  
              style={{ textDecoration:"none"}} 
              to="/funds"
              onClick={()=>handelManuClick(4)}
            >
              <p className={selectMenu===4 ? activeMenuClass : menuClass} >Funds</p>        
            </Link>
          </li>
          <li>
            <Link  
              style={{ textDecoration:"none"}} 
              to="/apps"
              onClick={()=>handelManuClick(5)}
            >
              <p className={selectMenu===5 ? activeMenuClass : menuClass} >Apps</p>        
            </Link>
          </li>
        </ul>
        <hr />
        <div className="profile" onClick={handleProfileClick}>
          <div className="avatar">{userInfo.userName.slice(0,2)}</div>
          <p className={`username`}>{userInfo.userName}</p>
        </div>
         <button className="logoutBtn" onClick={logoutHandler}>

            <LogoutIcon/>

         </button>
      </div>
       
    </div>
    </>
  );
};

export default Menu;
