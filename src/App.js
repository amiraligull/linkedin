/** @format */

import React from "react";
import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="app_body">
        <Sidebar />
        {/* sidebar */}
        {/* feed */}
        {/* widgets */}
      </div>
    </div>
  );
}

export default App;
