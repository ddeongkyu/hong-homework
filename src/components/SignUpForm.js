import React, { useState } from "react";
import "../SignUp.css";
import { BsFillExclamationTriangleFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
const SignUpForm = () => {
  //NAVIGATION//
  let navigate = useNavigate();
  function onMoveMain() {
    navigate("/");
  }
  /* NAME INPUT */
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const onChangeFirstName = (e) => {
    const { value } = e.target;
    setFirstName(value);
    if (value === "") {
      setStyleFirstName(0);
    } else {
      setStyleFirstName(1);
      setWarningFirst(0);
    }
  };
  const onChangeLastName = (e) => {
    const { value } = e.target;
    setLastName(value);
    if (value === "") {
      setStyleLastName(0);
    } else {
      setStyleLastName(1);
      setWarningLast(0);
    }
  };
  /* INPUT SETTER FUNCTION*/
  const [email, setEmail] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");

  /* STYLE SETTER FUNCTION */
  const [styleFirstName, setStyleFirstName] = useState(0);
  const [styleLastName, setStyleLastName] = useState(0);
  const [style, setStyle] = useState(0);
  const [styleAgain, setStyleAgain] = useState(0);
  const [stylePhoneNumber, setStylePhoneNumber] = useState(0);
  const [weakStyle, setWeakStyle] = useState(0);

  const [styleCharacter8, setStyleCharacter8] = useState(0);
  const [styleSpecial, setStyleSpecial] = useState(0);
  const [styleOneNumber, setStyleOneNumber] = useState(0);
  const [styleMixCase, setStyleMixCase] = useState(0);
  const [passwordValidationText, SetPasswordValidationText] = useState("WEAK");

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
      return setStyle(2);
    }
  };
  /* Mail Again Validate*/
  const onChangeAgain = (e) => {
    const { value } = e.target;
    setConfirmEmail(value);
    if (value === "") {
      setStyleAgain(0);
    } else if (email === value) {
      return setStyleAgain(2);
    } else {
      setStyleAgain(1);
    }
  };
  /* Phone number Validate */
  const onChangePhoneNumber = (e) => {
    const { value } = e.target;
    setPhoneNumber(value);
    const regPhone = /^[0-9]{3}[-]+[0-9]{4}[-]+[0-9]{4}$/;
    if (value === "") {
      setStylePhoneNumber(0);
    } else if (regPhone.test(value)) {
      setStylePhoneNumber(2);
    } else if (!regPhone.test(value)) {
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
    } else if (!regLegth.test(value)) {
      setStyleCharacter8(1);
    }
    // one Special Validate
    const regSpecial = /[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/;
    if (value === "") {
      setStyleSpecial(0);
    } else if (regSpecial.test(value)) {
      setStyleSpecial(2);
    } else if (!regSpecial.test(value)) {
      setStyleSpecial(1);
    }
    // one Number Validate
    const regNumber = /(?=.*?[0-9])/;
    if (value === "") {
      setStyleOneNumber(0);
    } else if (regNumber.test(value)) {
      setStyleOneNumber(2);
    } else if (!regNumber.test(value)) {
      setStyleOneNumber(1);
    }
    //Mixed upper & lowercase Validate
    const regMixed = /(?=.*?[a-z])(?=.*?[A-Z])/;
    if (value === "") {
      setStyleMixCase(0);
    } else if (regMixed.test(value)) {
      setStyleMixCase(2);
    } else if (!regMixed.test(value)) {
      setStyleMixCase(1);
    }
    //0~1개 파란색: WEAK (0), 2~3파란색: Hmm...(1) , 4파란색: SAFE(2)

    if (
      styleCharacter8 === 2 &&
      styleOneNumber === 2 &&
      styleSpecial === 2 &&
      styleMixCase === 2
    ) {
      setWeakStyle(2);
      SetPasswordValidationText("SAFE");
    } else if (
      (styleCharacter8 === 2 && styleOneNumber === 2) ||
      (styleCharacter8 === 2 && styleSpecial === 2) ||
      (styleCharacter8 === 2 && styleMixCase === 2) ||
      (styleOneNumber === 2 && styleSpecial === 2) ||
      (styleOneNumber === 2 && styleMixCase === 2) ||
      (styleSpecial === 2 && styleMixCase === 2) ||
      // COSM -> COS, COM, OSM, CSM
      (styleCharacter8 === 2 && styleOneNumber === 2 && styleSpecial === 2) ||
      (styleCharacter8 === 2 && styleOneNumber === 2 && styleMixCase === 2) ||
      (styleOneNumber === 2 && styleSpecial === 2 && styleMixCase === 2) ||
      (styleMixCase === 2 && styleCharacter8 === 2 && styleSpecial === 2)
    ) {
      setWeakStyle(1);
      SetPasswordValidationText("Hmm....");
    } else if (styleOneNumber === 0) {
      setWeakStyle(0);
      SetPasswordValidationText("WEAK");
    } else if (styleCharacter8 === 0) {
      setWeakStyle(0);
      SetPasswordValidationText("WEAK");
    } else if (styleMixCase === 0) {
      setWeakStyle(0);
      SetPasswordValidationText("WEAK");
    } else if (styleSpecial === 0) {
      setWeakStyle(0);
      SetPasswordValidationText("WEAK");
    } else if (styleOneNumber === 1) {
      setWeakStyle(0);
      SetPasswordValidationText("WEAK");
    } else if (styleCharacter8 === 1) {
      setWeakStyle(0);
      SetPasswordValidationText("WEAK");
    } else if (styleMixCase === 1) {
      setWeakStyle(0);
      SetPasswordValidationText("WEAK");
    } else if (styleSpecial === 1) {
      setWeakStyle(0);
      SetPasswordValidationText("WEAK");
    }
  };

  const [doYouAgree, setDoYouAgree] = useState(false);
  const doYouAgreeClick = (e) => {
    setDoYouAgree(!doYouAgree);
  };
  // WARNING
  const [warningFirst, setWarningFirst] = useState(0);
  const [warningLast, setWarningLast] = useState(0);
  const [warningEmail, setWarnigEmail] = useState(0);
  const [warningEmailAgain, setWarningEmailAgain] = useState(0);
  const [warningPassword, setWarningPasswrod] = useState(0);

  const SignUpFormSubmit = () => {
    if (firstName === "") {
      setWarningFirst(1);
    }
    if (lastName === "") {
      setWarningLast(1);
    }
    if (style === 0 || style === 1) {
      setWarnigEmail(1);
    }
    if (styleAgain === 0 || styleAgain === 1) {
      setWarningEmailAgain(1);
    }
    if (
      password === "" ||
      styleCharacter8 === 0 ||
      styleCharacter8 === 1 ||
      styleSpecial === 0 ||
      styleSpecial === 1 ||
      styleOneNumber === 0 ||
      styleOneNumber === 1 ||
      styleMixCase === 0 ||
      styleMixCase === 1
    ) {
      setWarningPasswrod(1);
    }
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
      setStyleFirstName(0);
      setStyleLastName(0);
      setStyle(0);
      setStyleAgain(0);
      setStylePhoneNumber(0);
      setStyleCharacter8(0);
      setStyleSpecial(0);
      setStyleOneNumber(0);
      setStyleMixCase(0);
      setDoYouAgree(false);
      window.localStorage.setItem(
        email,
        JSON.stringify({ lastName, firstName, phoneNumber, password })
      );
      alert(firstName + "님 회원가입을 축하드려요!!");
    }
  };

  return (
    <div className="AllContainer">
      <div className="SignUpContainer">
        <div className="textBlock">
          <div>
            Already a Customer?&nbsp;
            <strong style={{ color: "blue" }}>Sign in!</strong>
          </div>
        </div>
        <div className="inputWrappingDiv">
          <input
            placeholder="First Name"
            style={{ marginBottom: "10px" }}
            value={firstName}
            onChange={onChangeFirstName}
            className={
              styleFirstName === 0
                ? "inputStyle"
                : "inputStyle SignUpInputRight"
            }
          />
        </div>
        <div className={warningFirst === 0 ? "nameValidate" : "nameValidateOk"}>
          WRITE YOUR FIRST NAME!
        </div>
        <div className="inputWrappingDiv">
          <input
            placeholder="Last Name"
            value={lastName}
            onChange={onChangeLastName}
            className={
              styleLastName === 0 ? "inputStyle" : "inputStyle SignUpInputRight"
            }
          />
        </div>
        <div
          className={
            warningLast === 0 ? "nameValidateLast" : "nameValidateLastOk"
          }
        >
          WRITE YOUR LAST NAME!
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
        <div
          className={
            warningEmail === 0
              ? "pleaseConfirm"
              : warningEmail === 1 && style === 2
              ? "pleaseConfirm"
              : warningEmail === 1
              ? "pleaseConfirmPlease"
              : "pleaseConfirm"
          }
        >
          PLEASE CHECK YOUR EMAIL!
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
        <div
          className={
            warningEmailAgain === 0
              ? "pleaseConfirm"
              : warningEmailAgain === 1 && styleAgain === 2
              ? "pleaseConfirm"
              : warningEmailAgain === 1
              ? "pleaseConfirmPlease"
              : "pleaseConfirm"
          }
        >
          PLEASE CONFIRM YOUR EMAIL!
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
          <div className="textStyle">
            CREATE A PASSWORD
            <span
              className={
                weakStyle === 2
                  ? "weakSpanStyle weakSpanStyleSafe"
                  : weakStyle === 1
                  ? "weakSpanStyle weakSpanStyleHmm"
                  : weakStyle === 0
                  ? "weakSpanStyle"
                  : ""
              }
            >
              {passwordValidationText}
            </span>
          </div>
        </div>
        <div className="inputWrappingDiv">
          <input
            className={
              password === ""
                ? "inputStyle"
                : styleSpecial === 2 &&
                  styleOneNumber === 2 &&
                  styleCharacter8 === 2 &&
                  styleMixCase === 2
                ? "inputStyle SignUpInputRight"
                : "inputStyle SignUpInputWrong"
            }
            placeholder="********"
            type="password"
            onChange={onChangePassword}
            value={password}
          />
        </div>
        <div
          className={
            warningPassword === 0
              ? "pleaseConfirm"
              : warningPassword === 1 &&
                styleSpecial === 2 &&
                styleOneNumber === 2 &&
                styleCharacter8 === 2 &&
                styleMixCase === 2
              ? "pleaseConfirm"
              : warningPassword === 1
              ? "pleaseConfirmPlease"
              : "pleaseConfirm"
          }
        >
          PLEASE CHECK YOUR PASSWORD!
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
          <input
            checked={doYouAgree ? true : false}
            type="checkbox"
            onChange={() => doYouAgreeClick()}
          />
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
        <button
          disabled={doYouAgree ? false : true}
          className={
            doYouAgree
              ? "SigninBtnStyle SigninBtnStyleActive"
              : "SigninBtnStyle"
          }
          onClick={SignUpFormSubmit}
        >
          CREATE AN ACCOUNT
        </button>
        <div style={{ textAlign: "center" }}>or</div>
        <button onClick={onMoveMain} className="GoMainBtnStyle">
          GO MAIN
        </button>
      </div>
    </div>
  );
};

export default SignUpForm;
