/** @format */

import { Avatar } from "@mui/material";
import React from "react";
import "./sidebar.css";
const Sidebar = () => {
  // side bar hash tag headings
  const recentItem = (topic) => {
    return (
      <div className="recentItems">
        <div className="hastag">#</div>
        <p>{topic}</p>
      </div>
    );
  };
  // # tag side bar ending here
  return (
    <div className="sidebar">
      <div className="sidebartop">
        <img
          src="https://media-exp1.licdn.com/dms/image/C4D1BAQHrfgSFLECyWg/company-background_10000/0/1631775606203?e=1646125200&v=beta&t=slezfdEU09fEusGaewE3ccRLKKXIchTEFH5AlSKAeXE"
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
        {recentItem("React Js")}
        {recentItem("React Native")}
        {recentItem("Laravel")}
        {recentItem("Programing")}
        {recentItem("Music")}
      </div>
    </div>
  );
};

export default Sidebar;
