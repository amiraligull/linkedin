/** @format */

import React from "react";
import CreateIcon from "@mui/icons-material/Create";
import "./Feed.css";

const Feed = () => {
  return (
    <div className="Feed">
      <div className="FeedContainer">
        <div className="FeedInput">
          <CreateIcon />
          <input type="text" />
          <button type="submit ">Send</button>
        </div>
      </div>
    </div>
  );
};

export default Feed;
