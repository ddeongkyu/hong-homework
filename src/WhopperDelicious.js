import React from "react";
import "./components/WhopperDelicious.css";
const WhopperDelicious = ({ on, setOn }) => {
  const onCloseModal = () => {
    setOn(!on);
  };
  return (
    <nav className="nav" onClick={onCloseModal}>
      <ul className="navlist">
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

export default WhopperDelicious;
