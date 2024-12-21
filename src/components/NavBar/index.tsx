import React from "react";
import "./navbar.css";

function NavBar() {
  return (
    <div className="header">
      <div className="navTag">Portfolio</div>
      <div className="flex align-center flex-rows justify-between gap-2">
        <div className="navTag">Projects</div>

        <div className="navTag">Skills</div>

        <div className="navTag">About</div>
      </div>
    </div>
  );
}

export default NavBar;
