import React, { useState } from "react";
import "../SignUp.css";
import { BsFillExclamationTriangleFill } from "react-icons/bs";

const SignUpForm = () => {
  /* NAME INPUT */
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const onChangeFirstName = (e) => {
    const { value } = e.target;
    setFirstName(value);
  };
  const onChangeLastName = (e) => {
    const { value } = e.target;
    setLastName(value);
  };
  /* INPUT SETTER FUNCTION*/
  const [email, setEmail] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");

  /* STYLE SETTER FUNCTION */
  const [style, setStyle] = useState(0);
  const [styleAgain, setStyleAgain] = useState(0);
  const [stylePhoneNumber, setStylePhoneNumber] = useState(0);

  const [styleCharacter8, setStyleCharacter8] = useState(0);
  const [styleSpecial, setStyleSpecial] = useState(0);
  const [styleOneNumber, setStyleOneNumber] = useState(0);
  const [styleMixCase, setStyleMixCase] = useState(0);

  /* VALIDATE SETTER FUNCTION */
  const [validate, setValidate] = useState([
    { email: false, emailAgain: false, phone: false, password: false },
  ]);
  const [passwordValidate, setPasswordValidate] = useState([
    {
      characters8: false,
      specialCharacter: false,
      oneNumber: false,
      mixUpperLowercase: false,
    },
  ]);

  /* Mail Validate */
  const onChange = (e) => {
    setEmail(e.target.value);
    const regMail =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (e.target.value === "") {
      setStyle(0);
    } else if (!regMail.test(email)) {
      return setStyle(1);
    } else if (regMail.test(email)) {
      return (
        validate.map((email) => (email.email = true)) +
        setValidate(validate) +
        console.log(validate) +
        setStyle(2)
      );
    }
  };
  /* Mail Again Validate*/
  const onChangeAgain = (e) => {
    const { value } = e.target;
    setConfirmEmail(value);
    console.log(value);
    if (value === "") {
      setStyleAgain(0);
    } else if (email === value) {
      return (
        validate.map((emailAgain) => (emailAgain.emailAgain = true)) +
        setValidate(validate) +
        console.log(validate) +
        setStyleAgain(2)
      );
    } else {
      console.log("WHATEVER");
      setStyleAgain(1);
    }
  };
  /* Phone number Validate */
  const onChangePhoneNumber = (e) => {
    const { value } = e.target;
    setPhoneNumber(value);
    console.log(value);
    const regPhone = /^[0-9]{3}[-]+[0-9]{4}[-]+[0-9]{4}$/;
    if (value === "") {
      setStylePhoneNumber(0);
    } else if (regPhone.test(value)) {
      console.log("RIGHT!");
      setStylePhoneNumber(2);
      validate.map((phone) => (phone.phone = true));
      setValidate(validate);
      console.log(validate);
    } else if (!regPhone.test(value)) {
      console.log("WRONG!");
      setStylePhoneNumber(1);
    }
  };

  // PASSWORD VALIDATE //
  const onChangePassword = (e) => {
    const { value } = e.target;
    setPassword(value);

    //8Length Upper Validate
    const regLegth = /^.{8,99}$/;
    if (value === "") {
      setStyleCharacter8(0);
    } else if (regLegth.test(value)) {
      setStyleCharacter8(2);
      passwordValidate.map((characters8) => (characters8.characters8 = true));
      setPasswordValidate(passwordValidate);
    } else if (!regLegth.test(value)) {
      setStyleCharacter8(1);
      passwordValidate.map((characters8) => (characters8.characters8 = false));
      setPasswordValidate(passwordValidate);
    }
    // one Special Validate
    const regSpecial = /[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/;
    if (value === "") {
      setStyleSpecial(0);
    } else if (regSpecial.test(value)) {
      passwordValidate.map(
        (specialCharacter) => (specialCharacter.specialCharacter = true)
      );
      setPasswordValidate(passwordValidate);
      setStyleSpecial(2);
    } else if (!regSpecial.test(value)) {
      passwordValidate.map(
        (specialCharacter) => (specialCharacter.specialCharacter = false)
      );
      setPasswordValidate(passwordValidate);
      setStyleSpecial(1);
    }
    // one Number Validate
    const regNumber = /(?=.*?[0-9])/;
    if (value === "") {
      setStyleOneNumber(0);
    } else if (regNumber.test(value)) {
      passwordValidate.map((oneNumber) => (oneNumber.oneNumber = true));
      setPasswordValidate(passwordValidate);
      setStyleOneNumber(2);
    } else if (!regNumber.test(value)) {
      passwordValidate.map((oneNumber) => (oneNumber.oneNumber = false));
      setPasswordValidate(passwordValidate);
      setStyleOneNumber(1);
    }
    //Mixed upper & lowercase Validate
    const regMixed = /(?=.*?[a-z])(?=.*?[A-Z])/;
    if (value === "") {
      setStyleMixCase(0);
    } else if (regMixed.test(value)) {
      passwordValidate.map(
        (mixUpperLowercase) => (mixUpperLowercase.mixUpperLowercase = true)
      );
      setPasswordValidate(passwordValidate);
      setStyleMixCase(2);
    } else if (!regMixed.test(value)) {
      passwordValidate.map(
        (mixUpperLowercase) => (mixUpperLowercase.mixUpperLowercase = false)
      );
      setPasswordValidate(passwordValidate);
      setStyleMixCase(1);
    }
  };

  const [doYouAgree, setDoYouAgree] = useState(false);
  const doYouAgreeClick = (e) => {
    setDoYouAgree(!doYouAgree);
  };

  const SignUpFormSubmit = () => {
    if (firstName === "") {
      alert("First Name을 입력해 주세요!");
    } else if (lastName === "") {
      alert("Last Name을 입력해 주세요!");
    } else if (style === 0) {
      alert("Email을 입력해 주세요!");
    } else if (style === 1) {
      alert("Email의 양식을 확인해 주세요!");
    } else if (styleAgain === 0 || styleAgain === 1) {
      alert("Email을 다시 한 번 정확하게 입력해 주세요!");
    } else if (stylePhoneNumber === 1) {
      alert("휴대폰 번호 입력 양식을 확인해 주세요!");
    } else if (styleCharacter8 === 0) {
      alert("비밀번호를 입력해 주세요!");
    } else if (styleCharacter8 === 1) {
      alert("비밀번호는 최소 8자리 입니다!!");
    } else if (styleSpecial === 0 || styleSpecial === 1) {
      alert("비밀번호에는 최소한 1개의 특수문자가 들어가야 합니다!");
    } else if (styleOneNumber === 0 || styleOneNumber === 1) {
      alert("비밀번호에는 최소한 1개의 숫자가 들어가야 합니다!");
    } else if (styleMixCase === 0 || styleMixCase === 1) {
      alert("비밀번호는 영어 대/소문자를 반드시 섞어주셔야 합니다!!");
    } else if (doYouAgree === false) {
      alert("약관과 개인정보 정책에 동의해주세요!");
    } else if (
      firstName !== "" &&
      lastName !== "" &&
      style === 2 &&
      styleAgain === 2 &&
      (stylePhoneNumber === 2 || stylePhoneNumber === 0) &&
      styleCharacter8 === 2 &&
      styleSpecial === 2 &&
      styleOneNumber === 2 &&
      styleMixCase === 2 &&
      doYouAgree === true
    ) {
      setFirstName("");
      setLastName("");
      setEmail("");
      setConfirmEmail("");
      setPhoneNumber("");
      setPassword("");
      setStyle(0);
      setStyleAgain(0);
      setStylePhoneNumber(0);
      setStyleCharacter8(0);
      setStyleSpecial(0);
      setStyleOneNumber(0);
      setStyleMixCase(0);
      alert(firstName + "님 회원가입을 축하드려요!!");
    }
  };

  return (
    <div className="AllContainer">
      <div className="SignUpContainer">
        <div className="textBlock">
          <div>
            Already a Customer?&nbsp;&nbsp;
            <strong style={{ color: "blue" }}>Sign in!</strong>
          </div>
        </div>
        <div className="inputWrappingDiv">
          <input
            className="inputStyle"
            placeholder="First Name"
            style={{ marginBottom: "10px" }}
            value={firstName}
            onChange={onChangeFirstName}
          />
        </div>
        <div className="inputWrappingDiv">
          <input
            className="inputStyle"
            placeholder="Last Name"
            value={lastName}
            onChange={onChangeLastName}
          />
        </div>
        <div>
          <div className="textStyle">EMAIL</div>
        </div>
        <div className="inputWrappingDiv">
          <input
            className={
              style === 0
                ? "inputStyle"
                : style === 1
                ? "inputStyle SignUpInputWrong"
                : "inputStyle SignUpInputRight"
            }
            placeholder="you@username.com"
            value={email}
            onChange={onChange}
          />
        </div>
        <div>
          <div className="textStyle">ENTER YOUR EMAIL AGAIN</div>
        </div>
        <div className="inputWrappingDiv">
          <input
            className={
              styleAgain === 0
                ? "inputStyle"
                : styleAgain === 1
                ? "inputStyle SignUpInputWrong"
                : "inputStyle SignUpInputRight"
            }
            placeholder="you@username.com"
            value={confirmEmail}
            onChange={onChangeAgain}
          />
        </div>
        <div>
          <div className="textStyle">PHONE NUMBER</div>
        </div>
        <div className="inputWrappingDiv">
          <input
            className={
              stylePhoneNumber === 0
                ? "inputStyle"
                : stylePhoneNumber === 1
                ? "inputStyle SignUpInputWrong"
                : "inputStyle SignUpInputRight"
            }
            placeholder="010-1234-5678"
            onChange={onChangePhoneNumber}
            value={phoneNumber}
          />
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
            onChange={onChangePassword}
            value={password}
          />
        </div>
        <div className="BsStyle">
          <div
            className={
              styleCharacter8 === 0
                ? "BsStyleInnerText"
                : styleCharacter8 === 1
                ? "BsStyleInnerText PasswordWrong"
                : "BsStyleInnerText PasswordRight"
            }
          >
            <BsFillExclamationTriangleFill />
            At least 8 characters
          </div>
          <div
            className={
              styleSpecial === 0
                ? "BsStyleInnerText"
                : styleSpecial === 1
                ? "BsStyleInnerText PasswordWrong"
                : "BsStyleInnerText PasswordRight"
            }
          >
            <BsFillExclamationTriangleFill />
            One special character
          </div>
          <div
            className={
              styleOneNumber === 0
                ? "BsStyleInnerText"
                : styleOneNumber === 1
                ? "BsStyleInnerText PasswordWrong"
                : "BsStyleInnerText PasswordRight"
            }
          >
            <BsFillExclamationTriangleFill />
            At least one number
          </div>
          <div
            className={
              styleMixCase === 0
                ? "BsStyleInnerText"
                : styleMixCase === 1
                ? "BsStyleInnerText PasswordWrong"
                : "BsStyleInnerText PasswordRight"
            }
          >
            <BsFillExclamationTriangleFill />
            Mixed upper &amp; lowercase
          </div>
        </div>
        <div className={doYouAgree ? "AgreeTerms AgreeChecked" : "AgreeTerms"}>
          <input type="checkbox" onClick={() => doYouAgreeClick()} />
          Agree to the &nbsp;
          <div
            style={{
              display: "inline",
              textDecoration: "underLine",
              cursor: "pointer",
            }}
          >
            Terms
          </div>
          &nbsp;&amp;&nbsp;
          <div
            style={{
              display: "inline",
              textDecoration: "underLine",
              cursor: "pointer",
            }}
          >
            Privacy policy
          </div>
        </div>
        <button className="SigninBtnStyle" onClick={SignUpFormSubmit}>
          CREATE AN ACCOUNT
        </button>
      </div>
    </div>
  );
};

export default SignUpForm;
