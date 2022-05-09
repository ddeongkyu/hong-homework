import React, { useState } from "react";
import { RiMoneyDollarCircleLine, RiPrinterLine } from "react-icons/ri";
import { GiAlliedStar, GiMagnifyingGlass } from "react-icons/gi";
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";
import { DiAndroid, DiApple } from "react-icons/di";
import {
  FaInstagram,
  FaFacebookSquare,
  FaTwitterSquare,
  FaTwitch,
  FaYoutubeSquare,
} from "react-icons/fa";
import "../App.css";

const footerBottomClickedTextLeft = [
  "Data entry",
  "Customer service",
  "Copywriter",
  "Project manager",
  "Accountant",
  "Graphic designer",
  "Editor",
  "Software developer",
  "Healthcare",
  "Cyber security",
  "Sales",
  "Transcription",
  "Pharmacist",
  "Recruiter",
  "Attorney",
  "QA",
  "Social media",
  "HR",
  "Paralegal",
  "UX",
  "Data scientist",
];
const footerBottomClickedTextCenter = [
  "Toronto",
  "Montreal",
  "Calgary",
  "Ottawa",
  "Edmonton",
  "Mississauga",
  "Hamilton",
  "Quebec",
  "Winnipeg",
  "Vencouver",
  "Brampton",
  "Surrey",
  "Laval",
  "London",
  "Markham",
  "Victoria",
  "Vaughan",
  "Windsor",
  "Halifax",
  "Gatineau",
  "Longueuil",
  "Burnaby",
  "Markham",
  "Kitchener",
  "Sakatoon",
  "Richmond",
];
const footerBottomClickedTextRight = [
  "a Neurologist",
  "an Accountant",
  "a Project Manager",
  "a Psychologist",
  "a Mechanical Engineer",
  "a Copywriter",
  "a Graphic Designer",
  "a Psychiatrist",
  "a Bookkeeper",
  "an Actuary",
  "a Financial Analyst",
  "an Excutive Producer",
  "a Software Engineer",
  "a Computer Engineer",
  "a Treasurer",
  "a Lawyer",
  "a Physician",
  "an Excutive Assitant",
  "an Underwriter",
  "a Data Scientist",
  "a Registered Nurse",
  "a Sales Associate",
  "a Geologist",
  "a Carpenter",
  "a Cardiologist",
];
const footerGlsssDoorInformation = ["About/Press", "Awards", "Blog"];
const footerEmployersInformation = [
  "Get a FREE Employer",
  "Account",
  "Employer Center",
  "Post a Job",
];
const footerCommunityInformation = [
  "Help / Contact Us",
  "Guidelines",
  "Tearms of Use",
  "Privacy Cookies",
  "Do Not Sell My Personal Information Cookies Consent Tool",
];
const footerWorkWithUsInformation = ["Advertisers", "Developer", "Carrers"];
const footerBottomLogoBlock = [
  {
    class: "GiMagnifyingGlass",
    icon: <GiMagnifyingGlass className="GiMagnifyingGlass" />,
    text: "Find the Right Job",
  },
  {
    class: "GiAlliedStar",
    icon: <GiAlliedStar className="GiAlliedStar" />,
    text: "Research Companies",
  },
  {
    class: "RiPrinterLine",
    icon: <RiPrinterLine className="RiPrinterLine" />,
    text: "Compare Salaries",
  },
  {
    class: "RiMoneyDollarCircleLine",
    icon: <RiMoneyDollarCircleLine className="RiMoneyDollarCircleLine" />,
    text: "Apply To Jobs",
  },
];
function Footer() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleInformation = () => {
    setIsOpen((isOpen) => !isOpen);
  };
  return (
    <>
      <div className="FooterMainContainer">
        <div className="TextBlockA">GIANT PENGUIN</div>
        <div className="IconContaner">
          {footerBottomLogoBlock.map((item) => (
            <div className="Whatever">
              {item.icon}
              <div className="FooterTextBlock">{item.text}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="FooterClick">
        <div className="BoxboxBox" onClick={() => toggleInformation()}>
          {isOpen ? (
            <AiOutlineUp
              style={{
                width: "40px",
                height: "30px",
              }}
            />
          ) : (
            <AiOutlineDown
              className="AiOutLine"
              style={{
                width: "30px",
                height: "30px",
              }}
            />
          )}
        </div>
      </div>
      {isOpen ? (
        <div className="FooterBottomTextContainer">
          <div className="FooterBottomTextInformation">
            <strong>Popular Remote Jobs</strong>
            {footerBottomClickedTextLeft.map((text) => (
              <div className="footerBottomClickedText">
                {text} from home jobs
              </div>
            ))}
          </div>
          <div className="FooterBottomTextInformation">
            <strong>Popular Part-Time Jobs</strong>
            {footerBottomClickedTextCenter.map((text) => (
              <div className="footerBottomClickedText">Part time in {text}</div>
            ))}
          </div>
          <div className="FooterBottomTextInformation">
            <strong>Browse Occupations</strong>
            {footerBottomClickedTextRight.map((text) => (
              <div className="footerBottomClickedText">
                What Does {text} do?
              </div>
            ))}
          </div>
        </div>
      ) : null}

      <div className="FooterBottom">
        <div className="FooterBottomContainer">
          <div className="FooterBottomInformation">
            <img alt="zz" src="img/LOGO.png" className="Footerlogo" />
          </div>
          <div className="FooterBottomInformation">
            <strong>GlassDoor</strong>
            {footerGlsssDoorInformation.map((text) => (
              <div className="footerBottomLogoWhat">{text}</div>
            ))}
          </div>
          <div className="FooterBottomInformation">
            <strong>Employers</strong>
            {footerEmployersInformation.map((text) => (
              <div className="footerBottomLogoWhat">{text}</div>
            ))}
          </div>
          <div className="FooterBottomInformation">
            <strong>Community</strong>
            {footerCommunityInformation.map((text) => (
              <div className="footerBottomLogoWhat">{text}</div>
            ))}
          </div>
          <div className="FooterBottomInformation">
            <strong>Work With Us</strong>
            {footerWorkWithUsInformation.map((text) => (
              <div className="footerBottomLogoWhat">{text}</div>
            ))}
          </div>
        </div>
      </div>
      <div className="FooterBottomLogoBlock">
        <div className="DownloadAppBlock">
          Download the App &nbsp; &nbsp;
          <DiApple className="FooterAppLogo" />
          &nbsp;
          <DiAndroid className="FooterAppLogo" />
        </div>
        <div className="TwitterLogoBlock">
          <FaTwitch className="FooterAppLogo" />
          &nbsp;&nbsp;
          <FaFacebookSquare className="FooterAppLogo" />
          &nbsp;&nbsp;
          <FaTwitterSquare className="FooterAppLogo" />
          &nbsp;&nbsp;
          <FaYoutubeSquare className="FooterAppLogo" />
          &nbsp;&nbsp;
          <FaInstagram className="FooterAppLogo" />
        </div>
        <div className="SelectBlock">
          <input className="FootBottomInput" placeholder="Canada(English)" />
        </div>
      </div>
    </>
  );
}

export default Footer;
