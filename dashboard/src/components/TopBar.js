import React from "react";

import Menu from "./Menu";

const TopBar = ({logoutHandler, userInfo}) => {
  return (
    <div className="topbar-container">
      <div className="indices-container">
        <div className="nifty">
          <p className="index">NIFTY 50</p>
          <p className="index-points">{100.2} </p>
          <p className="percent">{0}</p>
        </div>
        <div className="sensex">
          <p className="index">SENSEX</p>
          <p className="index-points">{100.2}</p>
          <p className="percent">{0}</p>
        </div>
      </div>

      <Menu logoutHandler={logoutHandler} userInfo={userInfo} />
    </div>
  );
};

export default TopBar;
