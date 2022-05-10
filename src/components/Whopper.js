import React from "react";
import "../Whopper.css";
import { FiX } from "react-icons/fi";
const Whopper = ({ openClass, on, setOn }) => {
  const onMenuClose = () => {
    setOn(!on);
  };
  return (
    <nav className={openClass === "open" ? "pengsoo" : ""}>
      <ul className="navlist">
        <FiX onClick={onMenuClose} style={{ cursor: "pointer" }} />
        <li>
          <a className="menu-item" href="#">
            For Employers
          </a>
        </li>

        <li>
          <a className="menu-item" href="#">
            Post Jobs
          </a>
        </li>

        <li>
          <a className="menu-item" href="#">
            Sign in
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Whopper;
