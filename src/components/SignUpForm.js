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
    password: "",
    passwordNumberError: "",
    passwordMixedError: "",
    passwordSpecialError: "",
    passwordEightLengthError: "",
  });
  const [doYouAgree, setDoYouAgree] = useState(false);

  /* NAME INPUT*/
  const onChangeFirstName = (e) => {
    const { value } = e.target;
    setForm((prevForms) => {
      return {
        ...prevForms,
        firstName: value,
      };
    });
    if (value) {
      setErrors((prevErrors) => {
        return {
          ...prevErrors,
          firstName: "",
        };
      });
    }
  };

  const onChangeLastName = (e) => {
    const { value } = e.target;
    setForm((prevForms) => {
      return {
        ...prevForms,
        lastName: value,
      };
    });
    if (value) {
      setErrors((prevErrors) => {
        return {
          ...prevErrors,
          lastName: "",
        };
      });
    }
  };

  /* Mail Validate */
  const onChangeEmail = (e) => {
    const { value } = e.target;
    setForm((prevForms) => {
      return {
        ...prevForms,
        email: value,
      };
    });
    const regMail =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!regMail.test(value)) {
      setErrors((prevErrors) => {
        return {
          ...prevErrors,
          email: "invalid",
        };
      });
    } else if (regMail.test(value)) {
      setErrors((prevErrors) => {
        return {
          ...prevErrors,
          email: "",
        };
      });
    }
  };
  /* Mail Again Validate*/
  const onChangeAgain = (e) => {
    const { value } = e.target;
    setForm((prevForms) => {
      return {
        ...prevForms,
        confirmEmail: value,
      };
    });
    if (value !== form.email) {
      setErrors((prevErrors) => {
        return {
          ...prevErrors,
          confirmEmail: "invalid",
        };
      });
    } else if (value === form.email) {
      setErrors((prevErrors) => {
        return {
          ...prevErrors,
          confirmEmail: "",
        };
      });
    }
  };

  /* Phone number Validate */
  const onChangePhoneNumber = (e) => {
    const { value } = e.target;
    setForm((prevForms) => {
      return {
        ...prevForms,
        phoneNumber: value,
      };
    });
    const regPhone = /^[0-9]{3}[-]+[0-9]{4}[-]+[0-9]{4}$/;
    if (!regPhone.test(value)) {
      setErrors((prevErrors) => {
        return {
          ...prevErrors,
          phoneNumber: "invalid",
        };
      });
    } else if (regPhone.test(value)) {
      setErrors((prevErrors) => {
        return {
          ...prevErrors,
          phoneNumber: "",
        };
      });
    }
  };

  // PASSWORD VALIDATE //
  const onChangePassword = (e) => {
    const { value } = e.target;
    setForm((prevForms) => {
      return {
        ...prevForms,
        password: value,
      };
    });
    const passwrodError = {};
    // 8Length Upper Validate
    const regLegth = /^.{8,99}$/;
    if (value === "") {
      passwrodError.passwordEightLengthError = "";
    } else if (regLegth.test(value)) {
      passwrodError.passwordEightLengthError = "Validation Satisfaction";
    } else if (!regLegth.test(value)) {
      passwrodError.passwordEightLengthError = "invalid";
    }
    // Special Validate
    const regSpecial = /[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/;
    if (value === "") {
      passwrodError.passwordSpecialError = "";
    } else if (!regSpecial.test(value)) {
      passwrodError.passwordSpecialError = "invalid";
    } else if (regSpecial.test(value)) {
      passwrodError.passwordSpecialError = "Validation Satisfaction";
    }
    // Mixed upper & lowercase Validate
    const regMixed = /(?=.*?[a-z])(?=.*?[A-Z])/;
    if (value === "") {
      passwrodError.passwordMixedError = "";
    } else if (!regMixed.test(value)) {
      passwrodError.passwordMixedError = "invalid";
    } else if (regMixed.test(value)) {
      passwrodError.passwordMixedError = "Validation Satisfaction";
    }

    // one Number Validate
    const regNumber = /(?=.*?[0-9])/;
    if (value === "") {
      passwrodError.passwordNumberError = "";
    } else if (!regNumber.test(value)) {
      passwrodError.passwordNumberError = "invalid";
    } else if (regNumber.test(value)) {
      passwrodError.passwordNumberError = "Validation Satisfaction";
    }
    setErrors((prevErrors) => {
      return { ...prevErrors, ...passwrodError, password: "" };
    });
  };

  const doYouAgreeClick = () => {
    setDoYouAgree(!doYouAgree);
  };
  const onSignUpFormSubmit = (e) => {
    e.preventDefault();
    const submitError = {};
    if (form.firstName === "") {
      submitError.firstName = "empty";
    }
    if (form.lastName === "") {
      submitError.lastName = "empty";
    }
    if (form.email === "") {
      submitError.email = "empty";
    }
    if (form.confirmEmail === "") {
      submitError.confirmEmail = "empty";
    }
    if (form.phoneNumber === "invalid") {
      submitError.phoneNumber = "empty";
    }
    if (
      form.password === "" ||
      errors.passwordEightLengthError === "invalid" ||
      errors.passwordSpecialError === "invalid" ||
      errors.passwordNumberError === "invalid" ||
      errors.passwordMixedError === "number"
    ) {
      submitError.password = "invalid";
    }
    setErrors((prevErrors) => {
      return { ...prevErrors, ...submitError };
    });
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
    } else if (errors.passwordEightLengthError === "invalid") {
      alert("Please fill at least 8 character");
    } else if (errors.passwordSpecialError === "invalid") {
      alert("Please fill at Special character");
    } else if (errors.passwordNumberError === "invalid") {
      alert("Please fill at least one number");
    } else if (errors.passwordMixedError === "invalid") {
      alert("Please fill at least upper & lower character");
    } else {
      setForm((prevForms) => {
        return {
          ...prevForms,
          firstName: "",
          lastName: "",
          email: "",
          confirmEmail: "",
          phoneNumber: "",
          password: "",
        };
      });
      setErrors((prevErrors) => {
        return {
          ...prevErrors,
          password: "",
          passwordNumberError: "",
          passwordMixedError: "",
          passwordSpecialError: "",
          passwordEightLengthError: "",
        };
      });
      setDoYouAgree(false);
      window.localStorage.setItem(form.email, JSON.stringify(form));
      alert(form.firstName + "님 회원가입을 축하드려요!!");
    }
  };
  return (
    <div className="AllContainer">
      <div className="SignUpContainer">
        <div className="textBlock">
          <div>
            Already a Customer?&nbsp;
            <strong className="already">Sign in!</strong>
          </div>
        </div>
        <div className="inputWrappingDiv">
          <input
            placeholder="First Name"
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
            errors.lastName === "empty"
              ? "nameValidateLastOk"
              : "nameValidateLast"
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
          className={
            errors.email === "empty" ? "pleaseConfirmPlease" : "pleaseConfirm"
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
          className={
            errors.email === "empty" ? "pleaseConfirmPlease" : "pleaseConfirm"
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
            <span
              className={
                errors.passwordEightLengthError === "Validation Satisfaction" &&
                errors.passwordMixedError === "Validation Satisfaction" &&
                errors.passwordNumberError === "Validation Satisfaction" &&
                errors.passwordSpecialError === "Validation Satisfaction"
                  ? "weakSpanStyle weakSpanStyleSafe"
                  : "weakSpanStyle"
              }
            >
              {errors.passwordEightLengthError === "Validation Satisfaction" &&
              errors.passwordNumberError === "Validation Satisfaction" &&
              errors.passwordMixedError === "Validation Satisfaction" &&
              errors.passwordSpecialError === "Validation Satisfaction"
                ? "SAFE"
                : "WEAK"}
            </span>
          </div>
        </div>
        <div className="inputWrappingDiv">
          <input
            className={
              form.password === ""
                ? "inputStyle"
                : errors.passwordMixedError === "Validation Satisfaction" &&
                  errors.passwordNumberError === "Validation Satisfaction" &&
                  errors.passwordEightLengthError ===
                    "Validation Satisfaction" &&
                  errors.passwordSpecialError === "Validation Satisfaction"
                ? "inputStyle SignUpInputRight"
                : "inputStyle SignUpInputWrong"
            }
            placeholder="********"
            type="password"
            onChange={onChangePassword}
            value={form.password}
          />
        </div>
        <div
          className={
            errors.password === "invalid"
              ? "pleaseConfirmPlease"
              : "pleaseConfirm"
          }
        >
          PLEASE CHECK YOUR PASSWORD!
        </div>
        <div className="BsStyle">
          <div
            className={
              errors.passwordEightLengthError === "empty" ||
              errors.passwordEightLengthError === ""
                ? "BsStyleInnerText"
                : errors.passwordEightLengthError === "invalid"
                ? "BsStyleInnerText PasswordWrong"
                : "BsStyleInnerText PasswordRight"
            }
          >
            <BsFillExclamationTriangleFill />
            At least 8 characters
          </div>
          <div
            className={
              errors.passwordSpecialError === "empty" ||
              errors.passwordSpecialError === ""
                ? "BsStyleInnerText"
                : errors.passwordSpecialError === "invalid"
                ? "BsStyleInnerText PasswordWrong"
                : "BsStyleInnerText PasswordRight"
            }
          >
            <BsFillExclamationTriangleFill />
            One special character
          </div>
          <div
            className={
              errors.passwordNumberError === "empty" ||
              errors.passwordNumberError === ""
                ? "BsStyleInnerText"
                : errors.passwordNumberError === "invalid"
                ? "BsStyleInnerText PasswordWrong"
                : "BsStyleInnerText PasswordRight"
            }
          >
            <BsFillExclamationTriangleFill />
            At least one number
          </div>
          <div
            className={
              errors.passwordMixedError === "empty" ||
              errors.passwordMixedError === ""
                ? "BsStyleInnerText"
                : errors.passwordMixedError === "invalid"
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
          <div className="TermsAndPrivacy">Terms</div>
          &nbsp;&amp;&nbsp;
          <div className="TermsAndPrivacy">Privacy policy</div>
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
        <div className="orStyle">or</div>
        <button onClick={onMoveMain} className="GoMainBtnStyle">
          GO MAIN
        </button>
      </div>
    </div>
  );
};

export default SignUpForm;
