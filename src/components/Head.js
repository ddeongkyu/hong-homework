import React from "react";
import "../App.css";
import Modal2 from "./Modal";
import Modal1 from "./Modal1";
import { RiPrinterLine } from "react-icons/ri";
function Head() {
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
      {/* <Modal2 header="Find the Right Job">
                Millions of jobs. Search by whatmatters to you and find the
                <br /> one that's right for you.
                <FcOk
                  style={{
                    display: "flex",
                    float: "right",
                    height: "50px",
                    width: "50px",
                  }}
                />
                <button
                  style={{
                    display: "block",
                    background: "white",
                    marginTop: "5px",
                    borderRadius: "3px",
                    padding: "8px",
                    border: "0.5px solid #74c0fc",
                    color: "#74c0fc",
                  }}
                >
                  Start Using Glassdoor
                </button>
              </Modal2> */}
    </div>
  );
}

export default Head;
