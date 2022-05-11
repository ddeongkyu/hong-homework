import React, { useState } from "react";
import "../App.css";
import Modal2 from "./Modal";
import Modal1 from "./Modal1";
import { RiPrinterLine } from "react-icons/ri";
import { FcMenu } from "react-icons/fc";
import Whopper from "./Whopper";
import WhopperDelicious from "../WhopperDelicious";
function Head() {
  const [on, setOn] = useState(false);
  const onMenuClick = () => {
    setOn(!on);
  };
  return (
    <div className="HeadContainer">
      {/* LEFT BLOCK */}
      <div className="LeftBlock">
        <div className="LeftFlex">
          <img src="img/다운로드.jpeg" alt="zzz" className="App-logo" />
        </div>
        <div className="LeftFlex">
          <div className="dropdown">
            <div className="dropbtn">Jobs</div>
            <div className="dropdown-content">
              <Modal1 />
            </div>
          </div>
        </div>
        <div className="LeftFlex">
          <div className="dropdown">
            <div className="dropbtn">Companies</div>
            <div className="dropdown-content2">
              <Modal2 />
            </div>
          </div>
        </div>
        <div className="LeftFlex">Salaries</div>
        <div className="LeftFlex">Carrers</div>
      </div>

      {/* RIGHT BLOCK */}
      <div className="RightBlock">
        <div className="TextRight">For Employers</div>
        <div className="TextRight">
          <div className="RightPrint">
            <RiPrinterLine />
            Post Jobs
          </div>
        </div>
        <div className="TextRight">Sign in</div>
      </div>
      {/* 와퍼 메뉴 */}
      <aside className={on ? "shirimp" : ""}>
        {!on ? (
          <a href="#" onClick={onMenuClick}>
            <FcMenu
              size="40"
              style={{
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "center",
                marginRight: "20px",
              }}
            />
          </a>
        ) : null}
      </aside>
      {on && (
        <>
          <WhopperDelicious on={on} setOn={setOn} onClick={onMenuClick} />
          <Whopper openClass="open" on={on} setOn={setOn}></Whopper>
        </>
      )}
    </div>
  );
}

export default Head;
