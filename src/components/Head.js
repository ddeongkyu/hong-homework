import React from "react";
import { VscArchive } from "react-icons/vsc";
import "../App.css";
import Modal2 from "./Modal";
import Modal1 from "./Modal1";
import { FcPrivacy, FcOk } from "react-icons/fc";

function Head() {
  return (
    <div className="HeadContainer">
      <div className="LogoBlock">
        <img src="img/다운로드.jpeg" alt="zzz" className="App-logo" />
      </div>
      <div className="NewTextBlock">
        <div className="none1">Jobs</div>
        <Modal2 header="Find the Right Job">
          Millions of jobs. Search by whatmatters to you and find the <br /> one
          that's right for you.
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
        </Modal2>
      </div>
      <div className="NewTextBlock">
        <div className="none">Companies</div>
        <Modal1 header="Read Millions of Reviews" id="b">
          Read anonymous reviews on over 600,000 companies <br /> worldwide from
          people tat work there.
          <FcPrivacy
            style={{
              display: "flex",
              float: "right",
              height: "70px",
              width: "70px",
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
        </Modal1>
      </div>
      <div className="NewTextBlock">Salaries</div>
      <div className="NewTextBlock">Carrers</div>
      <div className="leftBlock">
        <div className="TextLeft">For Employers</div>
        <div className="TextLeft">
          <VscArchive />
          Post Jobs
        </div>
        <div className="TextLeft">Sign in</div>
      </div>
    </div>
  );
}

export default Head;
