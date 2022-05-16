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
    passwordNumberError: "",
    passwordMixedError: "",
    passwordSpecialError: "",
    passwordEightLengthError: "",
  });

  /* NAME INPUT*/
  const onChangeFirstName = (e) => {
    const { value } = e.target;
    setForm({ ...form, firstName: value });
    if (value !== "") {
      setErrors({ ...errors, firstName: "" });
    }
  };

  const onChangeLastName = (e) => {
    const { value } = e.target;
    setForm({ ...form, lastName: value });
    if (value !== "") {
      setErrors({ ...errors, lastName: "" });
    }
  };

  /* Mail Validate */
  const onChangeEmail = (e) => {
    const { value } = e.target;
    setForm({ ...form, email: value });
    const regMail =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!regMail.test(value)) {
      setErrors({ ...errors, email: "invalid" });
    } else if (regMail.test(value)) {
      setErrors({ ...errors, email: "" });
    }
  };
  /* Mail Again Validate*/
  const onChangeAgain = (e) => {
    const { value } = e.target;
    setForm({ ...form, confirmEmail: value });
    if (value !== form.email) {
      setErrors({ ...errors, confirmEmail: "invalid" });
    } else if (value === form.email) {
      setErrors({ ...errors, confirmEmail: "" });
    }
  };

  /* Phone number Validate */
  const onChangePhoneNumber = (e) => {
    const { value } = e.target;
    setForm({ ...form, phoneNumber: value });
    const regPhone = /^[0-9]{3}[-]+[0-9]{4}[-]+[0-9]{4}$/;
    if (!regPhone.test(value)) {
      setErrors({ ...errors, phoneNumber: "invalid" });
    } else if (regPhone.test(value)) {
      setErrors({ ...errors, phoneNumber: "" });
    }
  };

  // PASSWORD VALIDATE //
  const onChangePassword = (e) => {
    const { value } = e.target;
    setForm({ ...form, password: value });
    // 8Length Upper Validate
    const regLegth = /^.{8,99}$/;
    if (value === "") {
      setErrors({ ...errors, passwordEightLengthError: "" });
    } else if (regLegth.test(value)) {
      setErrors({ ...errors, passwordEightLengthError: "" });
    } else if (!regLegth.test(value)) {
      setErrors({ ...errors, passwordEightLengthError: "invalid" });
    }
    // Special Validate
    const regSpecial = /[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/;
    if (!regSpecial.test(value)) {
      setErrors({ ...errors, passwordSpecialError: "invalid" });
    } else if (regSpecial.test(value)) {
      setErrors({ ...errors, passwordSpecialError: "" });
    }
    // Mixed upper & lowercase Validate
    const regMixed = /(?=.*?[a-z])(?=.*?[A-Z])/;
    if (!regMixed.test(value)) {
      setErrors({ ...errors, passwordMixedError: "invalid" });
    } else if (regMixed.test(value)) {
      setErrors({ ...errors, passwordMixedError: "" });
    }

    // one Number Validate
    const regNumber = /(?=.*?[0-9])/;
    if (!regNumber.test(value)) {
      setErrors({ ...errors, passwordNumberError: "invalid" });
    } else if (regNumber.test(value)) {
      setErrors({ ...errors, passwordNumberError: "" });
    }
    //0~1개 파란색: WEAK (0), 2~3파란색: Hmm...(1) , 4파란색: SAFE(2)
    //밑에서 작성
  };

  const [doYouAgree, setDoYouAgree] = useState(false);
  const doYouAgreeClick = () => {
    setDoYouAgree(!doYouAgree);
  };
  const onSignUpFormSubmit = (e) => {
    e.preventDefault();
    if (form.firstName === "") {
      setErrors({ ...errors, firstName: "empty" });
    }
    if (form.lastName === "") {
      setErrors({ ...errors, lastName: "empty" });
    }
    if (form.email === "") {
      setErrors({ ...errors, email: "empty" });
    }
    if (form.confirmEmail === "") {
      setErrors({ ...errors, confirmEmail: "empty" });
    }
    if (form.phoneNumber === "invalid") {
      setErrors({ ...errors, phoneNumber: "empty" });
    }

    if (form.firstName === "") {
      alert("FIRST NAME IS REQUIRED ");
    } else if (form.lastName === "") {
      alert("LAST NAME IS REQUIRED");
    } else if (form.email === "") {
      alert("EMAIL IS REQUIRED");
    } else if (errors.email === "invalid") {
      alert("ENTER A VALID EMAIL ADDRESS");
    } else if (form.confirmEmail === "") {
      alert("PLEASE CONFIRM YOUR EMAIL");
    } else if (errors.confirmEmail === "invalid") {
      alert("PLEASE CONFRIM YOUR EMAIL AGAIN!");
    } else if (errors.phoneNumber === "invalid") {
      alert("ENTER A VALID PHONENUMBER");
    }
    // 밑으로 pasword error에 대한 alert
    // 이 사이에 작성할것!
    else {
      setForm({
        firstName: "",
        lastName: "",
        email: "",
        confirmEmail: "",
        phoneNumber: "",
        password: "",
      });
      setDoYouAgree(false);
      window.localStorage.setItem(form.email, JSON.stringify(form));
      alert(form.firstName + "님 회원가입을 축하드려요!!");
    }
  };
  console.log(form);
  console.log(errors);
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
            value={form.firstName}
            onChange={onChangeFirstName}
            className={
              form.firstName === ""
                ? "inputStyle"
                : "inputStyle SignUpInputRight"
            }
          />
        </div>
        <div
          className={
            errors.firstName === "empty" ? "nameValidateOk" : "nameValidate"
          }
        >
          WRITE YOUR FIRST NAME!
        </div>
        <div className="inputWrappingDiv">
          <input
            placeholder="Last Name"
            value={form.lastName}
            onChange={onChangeLastName}
            className={
              form.lastName === ""
                ? "inputStyle"
                : "inputStyle SignUpInputRight"
            }
          />
        </div>
        <div
          className={
            (errors.lastName = "empty" ? "nameValidate" : "nameValidateOk")
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
              form.email === ""
                ? "inputStyle"
                : errors.email === "invalid"
                ? "inputStyle SignUpInputWrong"
                : "inputStyle SignUpInputRight"
            }
            placeholder="you@username.com"
            value={form.email}
            onChange={onChangeEmail}
          />
        </div>
        <div
        // className={
        //   warningEmail.emailWarning === "" ||
        //   warningEmail.emailWarning === "fine"
        //     ? "pleaseConfirm"
        //     : "pleaseConfirmPlease"
        // }
        >
          PLEASE CHECK YOUR EMAIL!
        </div>
        <div>
          <div className="textStyle">ENTER YOUR EMAIL AGAIN</div>
        </div>
        <div className="inputWrappingDiv">
          <input
            className={
              form.confirmEmail === ""
                ? "inputStyle"
                : form.confirmEmail === form.email
                ? "inputStyle SignUpInputRight"
                : "inputStyle SignUpInputWrong"
            }
            placeholder="you@username.com"
            value={form.confirmEmail}
            onChange={onChangeAgain}
          />
        </div>
        <div
        // className={
        //   warningEmailAgain.confirmEmailWarning === "" ||
        //   warningEmailAgain.confirmEmailWarning === "fine"
        //     ? "pleaseConfirm"
        //     : "pleaseConfirmPlease"
        // }
        >
          PLEASE CONFIRM YOUR EMAIL!
        </div>
        <div>
          <div className="textStyle">PHONE NUMBER</div>
        </div>
        <div className="inputWrappingDiv">
          <input
            className={
              form.phoneNumber === ""
                ? "inputStyle"
                : errors.phoneNumber === "invalid"
                ? "inputStyle SignUpInputWrong"
                : "inputStyle SignUpInputRight"
            }
            placeholder="010-1234-5678"
            onChange={onChangePhoneNumber}
            value={form.phoneNumber}
          />
        </div>
        <div className="phoneNot">
          <span>Don't have a phone number? Leave it empty!</span>
        </div>
        <div>
          <div className="textStyle">
            CREATE A PASSWORD
            <span className="weakSpanStyle">WEAK</span>
          </div>
        </div>
        <div className="inputWrappingDiv">
          <input
            // className={
            //   form.password === ""
            //     ? "inputStyle"
            //     : errors.password.Mixed === "fine" &&
            //       errors.password.Number === "fine" &&
            //       errors.password.eightLength === "fine" &&
            //       errors.password.Special === "fine"
            //     ? "inputStyle SignUpInputRight"
            //     : "inputStyle SignUpInputWrong"
            // }
            placeholder="********"
            type="password"
            onChange={onChangePassword}
            value={form.password}
          />
        </div>
        <div>PLEASE CHECK YOUR PASSWORD!</div>
        <div className="BsStyle">
          <div
          // className={
          //   errors.password.eightLength === "empty" ||
          //   errors.password.eightLength === ""
          //     ? "BsStyleInnerText"
          //     : errors.password.eightLength === "invalid"
          //     ? "BsStyleInnerText PasswordWrong"
          //     : "BsStyleInnerText PasswordRight"
          // }
          >
            <BsFillExclamationTriangleFill />
            At least 8 characters
          </div>
          <div
          // className={
          //   errors.password.Special === "" ||
          //   errors.password.Special === "empty"
          //     ? "BsStyleInnerText"
          //     : errors.password.Special === "invalid"
          //     ? "BsStyleInnerText PasswordWrong"
          //     : "BsStyleInnerText PasswordRight"
          // }
          >
            <BsFillExclamationTriangleFill />
            One special character
          </div>
          <div
          // className={
          //   errors.password.Number === "" ||
          //   errors.password.Number === "empty"
          //     ? "BsStyleInnerText"
          //     : errors.password.Number === "invalid"
          //     ? "BsStyleInnerText PasswordWrong"
          //     : "BsStyleInnerText PasswordRight"
          // }
          >
            <BsFillExclamationTriangleFill />
            At least one number
          </div>
          <div
          // className={
          //   errors.password.Mixed === "empty" || errors.password.Mixed === ""
          //     ? "BsStyleInnerText"
          //     : errors.password.Mixed === "invalid"
          //     ? "BsStyleInnerText PasswordWrong"
          //     : "BsStyleInnerText PasswordRight"
          // }
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
