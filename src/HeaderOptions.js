/** @format */

import React from "react";
import "./HeaderOptions.css";
import Avatar from "@mui/material/Avatar";
const Headeroptions = ({ avatar, Icon, title }) => {
  return (
    <div className="headerOptions">
      {Icon && <Icon className="headerOptionIcons" />}
      {avatar && <Avatar className="headerOptionIcons" src={avatar} />}
      <h3 className="headerOptionTitle">{title}</h3>
    </div>
  );
};

export default Headeroptions;
