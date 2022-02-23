/** @format */

import { Avatar } from "@mui/material";
import React from "react";
import "./sidebar.css";
const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebartop">
        <img
          src="https://media-exp1.licdn.com/dms/image/C4D1BAQHrfgSFLECyWg/company-background_10000/0/1631775606203?e=1645718400&v=beta&t=F7sJjChm6hVBc6HUQDL7K5_slGfoEOShaSqz38gpPgQ"
          alt=""
        />
        <Avatar className="sidebarAvatar" />
        <h2>Amir Ali</h2>
        <h4>amiralifreelancer@gmail.com</h4>
      </div>

      <div className="sidebarStats">
        <div className="sidebarStat">
          <p>Who Viewed your Profile</p>
          <p className="sidebarStatNo">10</p>
        </div>
        <div className="sidebarStat">
          <p>Viewed your Posts</p>
          <p className="sidebarStatNo">10</p>
        </div>
      </div>
      <div className="sidebarBottom">
        <p>Recently</p>
      </div>
    </div>
  );
};

export default Sidebar;
