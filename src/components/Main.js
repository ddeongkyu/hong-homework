import React from "react";
import { VscMail, VscLock } from "react-icons/vsc";
import { BsFacebook } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import "../App.css";
import { useNavigate } from "react-router-dom";
function Main() {
  let navigate = useNavigate();
  function onMoveSignUp(e) {
    navigate("SignUp");
  }
  return (
    <>
      <div className="MainConainer">
        <div className="BtnContainer">
          <button className="FacebookBtn">
            <BsFacebook
              style={{
                marginLeft: "-40px",
                marginRight: "20px",
                width: "18px",
                height: "18px",
                marginTop: "3px",
                border: "none",
                boxSizing: "border-box",
              }}
            />
            Contunue with FaceBook
          </button>
          <button className="GoogleBtn">
            <FcGoogle
              style={{
                marginLeft: "-60px",
                marginRight: "20px",
                width: "19px",
                height: "19px",
                marginTop: "3px",
                boxSizing: "border-box",
              }}
            />
            Continue with Google
          </button>
          <div className="TextBlock">
            ------------------or------------------
          </div>
          <div className="CreateInput">
            <input
              className="InputStyle"
              placeholder="Create account with Email"
            />
            <VscMail className="VscMail" />
          </div>
          <div className="CreateInput">
            <input
              className="InputStyle"
              placeholder="Password"
              type="password"
            />
            <VscLock className="VscMail" />
          </div>
          <button className="ContinueBtn">Continue with Email</button>
          <div className="TextBlockB">
            <strong>
              Are you Hiring?{" "}
              <strong style={{ cursor: "pointer" }}>Post Jobs</strong>
            </strong>
          </div>
          <div onClick={onMoveSignUp}>
            <button className="signupBtn"> Sign Up!</button>
          </div>
        </div>
      </div>
      <div className="NewInformationBlock">
        <strong style={{ color: "red" }}>NEW!&nbsp;</strong> What are the Best
        Places in Work 2022?
        <strong style={{ color: "blue", cursor: "pointer" }}>
          &nbsp;See Winners!
        </strong>
      </div>
    </>
  );
}

export default Main;
