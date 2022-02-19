import React from "react";

import "./NavLink.css";

const NavLink = ({ text, icon }) => {
  return (
    <div>
      <li className="nav-item">
        <a href="/" className="nav-links">
            <div className="nav-links__text-container">
                <p className="nav-links__text">{text}</p>
            </div>
          <p className="nav-links__icon">{icon}</p>
        </a>
      </li>
    </div>
  );
};

export default NavLink;
