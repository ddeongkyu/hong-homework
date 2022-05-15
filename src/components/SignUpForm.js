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
  //FUNDAMENTAL SETTER FUNCTION  //
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    confirmEmail: "",
    phoneNumber: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    confirmEmail: "",
    phoneNumber: "",
    password: {
      Number: "",
      Mixed: "",
      Special: "",
      eightLength: "",
    },
  });
  /* SETTER FUNCTION*/
  const [email, setEmail] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [weakStyle, setWeakStyle] = useState(0);
  const [passwordValidationText, SetPasswordValidationText] = useState("WEAK");
  const [warningFirst, setWarningFirst] = useState({
    firstNameWarning: "",
  });
  const [warningLast, setWarningLast] = useState({
    lastNameWarning: "",
  });
  const [warningEmail, setWarnigEmail] = useState({
    emailWarning: "",
  });
  const [warningEmailAgain, setWarningEmailAgain] = useState({
    confirmEmailWarning: "",
  });
  const [warningPassword, setWarningPasswrod] = useState({
    passwordWarning: "",
  });

  /* NEW NAME INPUT*/
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const onChangeFirstName = (e) => {
    const { value } = e.target;
    setFirstName(value);
    if (value === "") {
      errors.firstName = "empty";
      setErrors(errors);
    } else {
      errors.firstName = "fine";
      setErrors(errors);
      warningFirst.firstNameWarning = "fine";
      setWarningFirst(warningFirst);
    }
  };
  const onChangeLastName = (e) => {
    const { value } = e.target;
    setLastName(value);
    if (value === "") {
      errors.lastName = "empty";
      setErrors(errors);
    } else {
      errors.lastName = "fine";
      setErrors(errors);
      warningLast.lastNameWarning = "fine";
      setWarningLast(warningLast);
    }
  };

  /* NEW Mail Validate */
  const onChange = (e) => {
    setEmail(e.target.value);
    const regMail =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (e.target.value === "") {
      errors.email = "empty";
      setErrors(errors);
    } else if (!regMail.test(email)) {
      errors.email = "invalid";
      setErrors(errors);
      warningEmail.emailWarning = "fine";
      setWarnigEmail(warningEmail);
    } else if (regMail.test(email)) {
      errors.email = "fine";
      setErrors(errors);
      warningEmail.emailWarning = "fine";
      setWarnigEmail(warningEmail);
    }
  };
  /* NEW Mail Again Validate*/
  const onChangeAgain = (e) => {
    const { value } = e.target;
    setConfirmEmail(value);
    if (value === "") {
      errors.confirmEmail = "empty";
      setErrors(errors);
    } else if (email === value) {
      errors.confirmEmail = "fine";
      setErrors(errors);
      warningEmailAgain.confirmEmailWarning = "fine";
      setWarningEmailAgain(warningEmailAgain);
    } else {
      errors.confirmEmail = "invalid";
      setErrors(errors);
      warningEmailAgain.confirmEmailWarning = "fine";
      setWarningEmailAgain(warningEmailAgain);
    }
  };

  /* NEW Phone number Validate */
  const onChangePhoneNumber = (e) => {
    const { value } = e.target;
    setPhoneNumber(value);
    const regPhone = /^[0-9]{3}[-]+[0-9]{4}[-]+[0-9]{4}$/;
    if (value === "") {
      errors.phoneNumber = "empty";
      setErrors(errors);
    } else if (regPhone.test(value)) {
      errors.phoneNumber = "fine";
      setErrors(errors);
    } else if (!regPhone.test(value)) {
      errors.phoneNumber = "invalid";
      setErrors(errors);
    }
  };
  // NEW PASSWORD VALIDATE //
  const onChangePassword = (e) => {
    const { value } = e.target;
    setPassword(value);
    //NEW 8Length Upper Validate
    const regLegth = /^.{8,99}$/;
    if (value === "") {
      errors.password.eightLength = "empty";
      setErrors(errors);
      warningPassword.passwordWarning = "invalid";
      setWarningPasswrod(warningPassword);
    } else if (regLegth.test(value)) {
      errors.password.eightLength = "fine";
      setErrors(errors);
    } else if (!regLegth.test(value)) {
      errors.password.eightLength = "invalid";
      setErrors(errors);
      warningPassword.passwordWarning = "invalid";
      setWarningPasswrod(warningPassword);
    }
    // NEW Special Validate
    const regSpecial = /[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/;
    if (value === "") {
      errors.password.Special = "empty";
      setErrors(errors);
      warningPassword.passwordWarning = "invalid";
      setWarningPasswrod(warningPassword);
    } else if (regSpecial.test(value)) {
      errors.password.Special = "fine";
      setErrors(errors);
    } else if (!regSpecial.test(value)) {
      errors.password.Special = "invalid";
      setErrors(errors);
      warningPassword.passwordWarning = "invalid";
      setWarningPasswrod(warningPassword);
    }
    // NEW one Number Validate
    const regNumber = /(?=.*?[0-9])/;
    if (value === "") {
      errors.password.Number = "empty";
      setErrors(errors);
      warningPassword.passwordWarning = "invalid";
      setWarningPasswrod(warningPassword);
    } else if (regNumber.test(value)) {
      errors.password.Number = "fine";
      setErrors(errors);
    } else if (!regNumber.test(value)) {
      errors.password.Number = "invalid";
      setErrors(errors);
      warningPassword.passwordWarning = "invalid";
      setWarningPasswrod(warningPassword);
    }
    // NEW Mixed upper & lowercase Validate
    const regMixed = /(?=.*?[a-z])(?=.*?[A-Z])/;
    if (value === "") {
      errors.password.Mixed = "empty";
      setErrors(errors);
      warningPassword.passwordWarning = "invalid";
      setWarningPasswrod(warningPassword);
    } else if (regMixed.test(value)) {
      errors.password.Mixed = "fine";
      setErrors(errors);
    } else if (!regMixed.test(value)) {
      errors.password.Mixed = "invalid";
      setErrors(errors);
      warningPassword.passwordWarning = "invalid";
      setWarningPasswrod(warningPassword);
    }
    //0~1개 파란색: WEAK (0), 2~3파란색: Hmm...(1) , 4파란색: SAFE(2)
    if (
      errors.password.Mixed === "fine" &&
      errors.password.Special === "fine" &&
      errors.password.eightLength === "fine" &&
      errors.password.Number === "fine"
    ) {
      warningPassword.passwordWarning = "fine";
    }
    if (warningPassword.passwordWarning === "fine") {
      setWeakStyle(2);
      SetPasswordValidationText("SAFE");
    } else if (
      (errors.password.Number === "fine" &&
        errors.password.eightLength === "fine") ||
      (errors.password.eightLength === "fine" &&
        errors.password.Special === "fine") ||
      (errors.password.eightLength === "fine" &&
        errors.password.Mixed === "fine") ||
      (errors.password.Number === "fine" &&
        errors.password.Special === "fine") ||
      (errors.password.Number === "fine" && errors.password.Mixed === "fine") ||
      (errors.password.Special === "fine" &&
        errors.password.Mixed === "fine") ||
      // COSM -> COS, COM, OSM, CSM
      (errors.password.eightLength === "fine" &&
        errors.password.Number === "fine" &&
        errors.password.Special === "fine") ||
      (errors.password.eightLength === "fine" &&
        errors.password.Number === "fine" &&
        errors.password.Mixed === "fine") ||
      (errors.password.Number === "fine" &&
        errors.password.Special === "fine" &&
        errors.password.Mixed === "fine") ||
      (errors.password.Mixed === "fine" &&
        errors.password.eightLength === "fine" &&
        errors.password.Special === "fine")
    ) {
      setWeakStyle(1);
      SetPasswordValidationText("Hmm....");
    } else if (errors.password.Number === "") {
      setWeakStyle(0);
      SetPasswordValidationText("WEAK");
    } else if (errors.password.eightLength === "") {
      setWeakStyle(0);
      SetPasswordValidationText("WEAK");
    } else if (errors.password.Mixed === "") {
      setWeakStyle(0);
      SetPasswordValidationText("WEAK");
    } else if (errors.password.Special === "") {
      setWeakStyle(0);
      SetPasswordValidationText("WEAK");
    } else if (errors.password.Number === "invalid") {
      setWeakStyle(0);
      SetPasswordValidationText("WEAK");
    } else if (errors.password.eightLength === "invalid") {
      setWeakStyle(0);
      SetPasswordValidationText("WEAK");
    } else if (errors.password.Mixed === "invalid") {
      setWeakStyle(0);
      SetPasswordValidationText("WEAK");
    } else if (errors.password.Special === "invalid") {
      setWeakStyle(0);
      SetPasswordValidationText("WEAK");
    } else if (password === "") {
      setWeakStyle(0);
      SetPasswordValidationText("WEAK");
    }
  };

  const [doYouAgree, setDoYouAgree] = useState(false);
  const doYouAgreeClick = () => {
    setDoYouAgree(!doYouAgree);
  };
  const onSignUpFormSubmit = () => {
    if (firstName === "") {
      warningFirst.firstNameWarning = "invalid";
      setWarningFirst(warningFirst);
    }
    if (lastName === "") {
      warningLast.lastNameWarning = "invalid";
      setWarningLast(warningLast);
    }
    if (
      email === "" ||
      errors.email === "empty" ||
      errors.email === "invalid"
    ) {
      warningEmail.emailWarning = "invalid";
      setWarnigEmail(warningEmail);
    }
    if (
      confirmEmail === "" ||
      errors.confirmEmail === "empty" ||
      errors.confirmEmail === "invalid"
    ) {
      warningEmailAgain.confirmEmailWarning = "invalid";
      setWarningEmailAgain(warningEmailAgain);
    }
    if (
      password === "" ||
      errors.password.eightLength === "invalid" ||
      errors.password.eightLength === "empty" ||
      errors.password.Mixed === "invalid" ||
      errors.password.Mixed === "empty" ||
      errors.password.Number === "invalid" ||
      errors.password.Number === "empty" ||
      errors.password.Special === "invalid" ||
      errors.password.Special === "empty"
    ) {
      warningPassword.passwordWarning = "invalid";
      setWarningPasswrod(warningPassword);
    }

    if (firstName === "") {
      alert("First Name을 입력해 주세요!");
    } else if (lastName === "") {
      alert("Last Name을 입력해 주세요!");
    } else if (errors.email === "empty" || errors.email === "") {
      alert("Email을 입력해 주세요!");
    } else if (errors.email === "invalid") {
      alert("Email의 양식을 확인해 주세요!");
    } else if (errors.confirmEmail === "empty" || errors.confirmEmail === "") {
      alert("Email을 다시 한 번 정확하게 입력해 주세요!");
    } else if (errors.phoneNumber === "invalid") {
      alert("휴대폰 번호 입력 양식을 확인해 주세요!");
    } else if (password === "") {
      alert("비밀번호를 입력해 주세요!");
    } else if (
      errors.password.eightLength === "invalid" ||
      errors.password.eightLength === "empty"
    ) {
      alert("비밀번호는 최소 8자리 입니다!!");
    } else if (
      errors.password.Special === "invalid" ||
      errors.password.Special === "empty"
    ) {
      alert("비밀번호에는 최소한 1개의 특수문자가 들어가야 합니다!");
    } else if (
      errors.password.Number === "invalid" ||
      errors.password.Number === "empty"
    ) {
      alert("비밀번호에는 최소한 1개의 숫자가 들어가야 합니다!");
    } else if (
      errors.password.Mixed === "invalid" ||
      errors.password.Mixed === "empty"
    ) {
      alert("비밀번호는 영어 대/소문자를 반드시 섞어주셔야 합니다!!");
    } else if (
      firstName !== "" &&
      lastName !== "" &&
      errors.email === "fine" &&
      errors.confirmEmail === "fine" &&
      (errors.phoneNumber === "fine" ||
        errors.phoneNumber === "" ||
        errors.phoneNumber === "empty") &&
      errors.password.eightLength === "fine" &&
      errors.password.Mixed === "fine" &&
      errors.password.Number === "fine" &&
      errors.password.Special === "fine" &&
      doYouAgree === true
    ) {
      setFirstName("");
      setLastName("");
      setEmail("");
      setConfirmEmail("");
      setPhoneNumber("");
      form.firstName = firstName;
      form.lastName = lastName;
      form.email = email;
      form.confirmEmail = confirmEmail;
      form.phoneNumber = phoneNumber;
      form.password = password;
      setForm(form);
      console.log(form);
      errors.firstName = "";
      errors.lastName = "";
      errors.email = "";
      errors.confirmEmail = "";
      errors.phoneNumber = "";
      errors.password.Special = "";
      errors.password.Mixed = "";
      errors.password.Number = "";
      errors.password.eightLength = "";
      setPassword("");
      setErrors(errors);
      setDoYouAgree(false);
      window.localStorage.setItem(email, JSON.stringify(form));
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
              errors.firstName === "" || errors.firstName === "empty"
                ? "inputStyle"
                : "inputStyle SignUpInputRight"
            }
          />
        </div>
        <div
          className={
            warningFirst.firstNameWarning === "" ||
            warningFirst.firstNameWarning === "fine"
              ? "nameValidate"
              : "nameValidateOk"
          }
        >
          WRITE YOUR FIRST NAME!
        </div>
        <div className="inputWrappingDiv">
          <input
            placeholder="Last Name"
            value={lastName}
            onChange={onChangeLastName}
            className={
              errors.lastName === "empty" || errors.lastName === ""
                ? "inputStyle"
                : "inputStyle SignUpInputRight"
            }
          />
        </div>
        <div
          className={
            warningLast.lastNameWarning === "" ||
            warningLast.lastNameWarning === "fine"
              ? "nameValidate"
              : "nameValidateOk"
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
              errors.email === "" || errors.email === "empty"
                ? "inputStyle"
                : errors.email === "invalid"
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
            warningEmail.emailWarning === "" ||
            warningEmail.emailWarning === "fine"
              ? "pleaseConfirm"
              : "pleaseConfirmPlease"
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
              errors.confirmEmail === "" || errors.confirmEmail === "empty"
                ? "inputStyle"
                : errors.confirmEmail === "invalid"
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
            warningEmailAgain.confirmEmailWarning === "" ||
            warningEmailAgain.confirmEmailWarning === "fine"
              ? "pleaseConfirm"
              : "pleaseConfirmPlease"
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
              errors.phoneNumber === "" || errors.phoneNumber === "empty"
                ? "inputStyle"
                : errors.phoneNumber === "invalid"
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
                : errors.password.Mixed === "fine" &&
                  errors.password.Number === "fine" &&
                  errors.password.eightLength === "fine" &&
                  errors.password.Special === "fine"
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
            warningPassword.passwordWarning === ""
              ? "pleaseConfirm"
              : "pleaseConfirmPlease"
          }
        >
          PLEASE CHECK YOUR PASSWORD!
        </div>
        <div className="BsStyle">
          <div
            className={
              errors.password.eightLength === "empty" ||
              errors.password.eightLength === ""
                ? "BsStyleInnerText"
                : errors.password.eightLength === "invalid"
                ? "BsStyleInnerText PasswordWrong"
                : "BsStyleInnerText PasswordRight"
            }
          >
            <BsFillExclamationTriangleFill />
            At least 8 characters
          </div>
          <div
            className={
              errors.password.Special === "" ||
              errors.password.Special === "empty"
                ? "BsStyleInnerText"
                : errors.password.Special === "invalid"
                ? "BsStyleInnerText PasswordWrong"
                : "BsStyleInnerText PasswordRight"
            }
          >
            <BsFillExclamationTriangleFill />
            One special character
          </div>
          <div
            className={
              errors.password.Number === "" ||
              errors.password.Number === "empty"
                ? "BsStyleInnerText"
                : errors.password.Number === "invalid"
                ? "BsStyleInnerText PasswordWrong"
                : "BsStyleInnerText PasswordRight"
            }
          >
            <BsFillExclamationTriangleFill />
            At least one number
          </div>
          <div
            className={
              errors.password.Mixed === "empty" || errors.password.Mixed === ""
                ? "BsStyleInnerText"
                : errors.password.Mixed === "invalid"
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
          onClick={onSignUpFormSubmit}
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
