import React from "react";
import { VscArchive } from "react-icons/vsc";
import "../App.css";

function Head() {
  return (
    <div className="HeadContainer">
      <div className="LogoBlock">
        <img src="img/zzzzzz.png" alt="zzz" className="App-logo" />
      </div>
      <div className="NewTextBlock">Jobs</div>
      <div className="NewTextBlock">Companies</div>
      <div className="NewTextBlock">Salaries</div>
      <div className="NewTextBlock">Carrers</div>
      <div className="TextLeft">Sign in</div>
      <div className="TextLeft">
        <VscArchive />
        Post Jobs
      </div>
      <div className="TextLeft">For Employers</div>
    </div>
  );
}

export default Head;
