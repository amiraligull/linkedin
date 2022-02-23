/** @format */

import React from "react";
import Logo from "./logo.png";
import "./Header.css";
import Headeroptions from "./HeaderOptions";
import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import ChatIcon from "@mui/icons-material/Chat";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import WorkIcon from "@mui/icons-material/Work";
export default function Header() {
  return (
    <div className="header">
      <div className="header-left">
        <img src={Logo} className="logo" />
        <div className="header_search">
          <SearchIcon />
          <input type="text" placeholder="Search" />
        </div>
      </div>
      <div className="header-right">
        <Headeroptions title="Home" Icon={HomeIcon} />
        <Headeroptions title="My Network" Icon={SupervisorAccountIcon} />
        <Headeroptions title="jobs" Icon={WorkIcon} />
        <Headeroptions title="Messaging" Icon={ChatIcon} />
        <Headeroptions title="Notifications" Icon={NotificationsActiveIcon} />
        <Headeroptions
          title="me"
          avatar="https://media-exp1.licdn.com/dms/image/C4D03AQEiKDhFc1yhqg/profile-displayphoto-shrink_200_200/0/1625129173939?e=1651104000&v=beta&t=va2enj_-E-03NINMxjIQvSt8GECJ6_q0yLYiZhwzssE"
        />
      </div>
    </div>
  );
}
