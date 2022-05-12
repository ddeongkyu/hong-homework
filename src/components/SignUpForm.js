import React, { useState } from "react";
import "../SignUp.css";
import { BsFillExclamationTriangleFill } from "react-icons/bs";

const SignUpForm = () => {
  const [value, setValue] = useState("");
  const [valueAgain, setValueAgain] = useState("");
  const [validate, setValidate] = useState([
    { email: false, emailAgain: false, password: false },
  ]);
  const onChange = (e) => {
    setValue(e.target.value);
    // console.log(value);
    const regMail =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!regMail.test(value)) {
      return console.log("WRONG!");
    } else if (regMail.test(value)) {
      return (
        validate.map((email) => (email.email = true)) +
        setValidate(validate) +
        console.log(validate)
      );
    }
  };
  const onChangeAgain = (e) => {
    setValueAgain(e.target.value);
    console.log(valueAgain);
    console.log(value);
    if (value === valueAgain) {
      return (
        validate.map((emailAgain) => (emailAgain.emailAgain = true)) +
        setValidate(validate) +
        console.log(validate)
      );
    } else {
      console.log("WHATEVER");
    }
  };
  return (
    <div className="SignUpContainer">
      <div className="textBlock">
        <div>
          Already a Customer? <strong style={{ color: "blue" }}>Sign in</strong>
        </div>
      </div>
      <div className="inputWrappingDiv">
        <input
          className="inputStyle"
          placeholder="First Name"
          style={{ marginBottom: "10px" }}
        />
      </div>
      <div className="inputWrappingDiv">
        <input className="inputStyle" placeholder="Last Name" />
      </div>
      <div>
        <div className="textStyle">EMAIL</div>
      </div>
      <div className="inputWrappingDiv">
        <input
          className="inputStyle"
          placeholder="you@username.com"
          value={value}
          onChange={onChange}
        />
      </div>
      <div>
        <div className="textStyle">ENTER YOUR EMAIL AGAIN</div>
      </div>
      <div className="inputWrappingDiv">
        <input
          className="inputStyle"
          placeholder="you@username.com"
          value={valueAgain}
          onChange={onChangeAgain}
        />
      </div>
      <div>
        <div className="textStyle">PHONE NUMBER</div>
      </div>
      <div className="inputWrappingDiv">
        <input className="inputStyle" placeholder="(123)456-7890" />
      </div>
      <div className="phoneNot">
        <span>Don't have a phone number? Leave it empty!</span>
      </div>
      <div>
        <div className="textStyle">CREATE A PASSWORD</div>
      </div>
      <div className="inputWrappingDiv">
        <input
          className="inputStyle"
          placeholder="************"
          type="password"
        />
      </div>
      <div className="BsStyle">
        <div className="BsStyleInnerText">
          <BsFillExclamationTriangleFill />
          At least 8 characters
        </div>
        <div className="BsStyleInnerText">
          <BsFillExclamationTriangleFill />
          One special character
        </div>
        <div className="BsStyleInnerText">
          <BsFillExclamationTriangleFill />
          At least one number
        </div>
        <div className="BsStyleInnerText">
          <BsFillExclamationTriangleFill />
          Mixed upper &amp; lowercase
        </div>
      </div>
      <div className="AgreeTerms">
        <input type="checkbox" />
        Agree to the
        <div style={{ display: "inline", textDecoration: "underLine" }}>
          Terms
        </div>
        &amp;{" "}
        <div style={{ display: "inline", textDecoration: "underLine" }}>
          Privacy policy
        </div>
      </div>
      <button className="SigninBtnStyle">CREATE AN ACCOUNT</button>
    </div>
  );
};

export default SignUpForm;
