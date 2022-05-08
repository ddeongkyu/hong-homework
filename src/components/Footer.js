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
          <div className="GlassBlock">
            <GiMagnifyingGlass className="GiMagnifyingGlass" />
            <div className="FooterTextBlock">Find the Right Job</div>
          </div>
          <div className="StarBlock">
            <GiAlliedStar className="GiMagnifyingGlass" />
            <div className="FooterTextBlock">Research Companies</div>
          </div>
          <div className="PrintBlock">
            <RiPrinterLine className="GiMagnifyingGlass" />
            <div className="FooterTextBlock">Compare Salaries</div>
          </div>
          <div className="DollorBlock">
            <RiMoneyDollarCircleLine className="GiMagnifyingGlass" />
            <div className="FooterTextBlock">Apply To Jobs</div>
          </div>
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
            <div className="FooterBottomTextYes">
              Data entry work from home jobs
            </div>
            <div className="FooterBottomTextYes">
              Customer service work from home jobs
            </div>
            <div className="FooterBottomTextYes">
              Copywriter work from home jobs
            </div>
            <div className="FooterBottomTextYes">
              Project manager work from home jobs
            </div>
            <div className="FooterBottomTextYes">
              Accountant work from home jobs
            </div>
            <div className="FooterBottomTextYes">
              Graphic designer work from home jobs
            </div>
            <div className="FooterBottomTextYes">
              Editor work from home jobs
            </div>
            <div className="FooterBottomTextYes">
              Software developer work from home jobs
            </div>
            <div className="FooterBottomTextYes">
              Healthcare work from home jobs
            </div>
            <div className="FooterBottomTextYes">
              Cyber security work from home jobs
            </div>
            <div className="FooterBottomTextYes">Sales work from home jobs</div>
            <div className="FooterBottomTextYes">
              Transcription work from home jobs
            </div>
            <div className="FooterBottomTextYes">
              Pharmacist work from home jobs
            </div>
            <div className="FooterBottomTextYes">
              Recruiter work from home jobs
            </div>
            <div className="FooterBottomTextYes">
              Attorney work from home jobs
            </div>
            <div className="FooterBottomTextYes">QA work from home jobs</div>
            <div className="FooterBottomTextYes">
              Social mdeia work from home jobs
            </div>
            <div className="FooterBottomTextYes">HR work from home jobs</div>
            <div className="FooterBottomTextYes">
              Paralegal work from home jobs
            </div>
            <div className="FooterBottomTextYes">UX work from home jobs</div>
            <div className="FooterBottomTextYes">
              Data scientist work from home jobs
            </div>
          </div>
          <div className="FooterBottomTextInformation">
            <strong>Popular Part-Time Jobs</strong>
            <div className="FooterBottomTextYes">Part time jobs in Toronto</div>
            <div className="FooterBottomTextYes">
              Part time jobs in Montreal
            </div>
            <div className="FooterBottomTextYes">Part time jobs in Calgary</div>
            <div className="FooterBottomTextYes">Part time jobs in Ottawa</div>
            <div className="FooterBottomTextYes">
              Part time jobs in Edmonton
            </div>
            <div className="FooterBottomTextYes">
              Part time jobs in Mississauga
            </div>
            <div className="FooterBottomTextYes">
              Part time jobs in Hamilton
            </div>
            <div className="FooterBottomTextYes">Part time jobs in Quebec</div>
            <div className="FooterBottomTextYes">
              Part time jobs in Winnipeg
            </div>
            <div className="FooterBottomTextYes">
              Part time jobs in Vancouver
            </div>
            <div className="FooterBottomTextYes">
              Part time jobs in Brampton
            </div>
            <div className="FooterBottomTextYes">Part time jobs in Surrey</div>
            <div className="FooterBottomTextYes">Part time jobs in Laval</div>
            <div className="FooterBottomTextYes">Part time jobs in London</div>
            <div className="FooterBottomTextYes">Part time jobs in Markham</div>
            <div className="FooterBottomTextYes">
              Part time jobs in Victoria
            </div>
            <div className="FooterBottomTextYes">Part time jobs in Vaughan</div>
            <div className="FooterBottomTextYes">Part time jobs in Windsor</div>
            <div className="FooterBottomTextYes">Part time jobs in Halifax</div>
            <div className="FooterBottomTextYes">
              Part time jobs in Gatineau
            </div>
            <div className="FooterBottomTextYes">
              Part time jobs in Longueuil
            </div>
            <div className="FooterBottomTextYes">Part time jobs in Burnaby</div>{" "}
            <div className="FooterBottomTextYes">Part time jobs in Markham</div>
            <div className="FooterBottomTextYes">
              Part time jobs in Kitchener
            </div>
            <div className="FooterBottomTextYes">
              Part time jobs in Sakatoon
            </div>
            <div className="FooterBottomTextYes">
              Part time jobs in Richmond
            </div>
          </div>
          <div className="FooterBottomTextInformation">
            <strong>Browse Occupations</strong>
            <div className="FooterBottomTextYes">
              What Does a Neurologist do?
            </div>
            <div className="FooterBottomTextYes">
              What Does an Accountant do?
            </div>
            <div className="FooterBottomTextYes">
              What Does a Project Manager do?
            </div>
            <div className="FooterBottomTextYes">
              What Does a Psychologist do?
            </div>
            <div className="FooterBottomTextYes">
              What Does a Mechanical Engineer do?
            </div>
            <div className="FooterBottomTextYes">
              What Does a Copywriter do?
            </div>
            <div className="FooterBottomTextYes">
              What Does a Graphic Designerdo?
            </div>
            <div className="FooterBottomTextYes">
              What Does a Psychiatrist do?
            </div>
            <div className="FooterBottomTextYes">
              What Does a Bookkeeper do?
            </div>
            <div className="FooterBottomTextYes">What Does an Actuary do?</div>
            <div className="FooterBottomTextYes">
              What Does a Financial Analyst do?
            </div>
            <div className="FooterBottomTextYes">
              What Does an Excutive Producer do?
            </div>
            <div className="FooterBottomTextYes">
              What Does a Software Engineer do?
            </div>
            <div className="FooterBottomTextYes">
              What Does a Computer Engineer do?
            </div>
            <div className="FooterBottomTextYes">What Does a Treasurer do?</div>
            <div className="FooterBottomTextYes">What Does a Lawyer do?</div>
            <div className="FooterBottomTextYes">What Does a Physician do?</div>
            <div className="FooterBottomTextYes">
              What Does an Excutive Assistant do?
            </div>
            <div className="FooterBottomTextYes">
              What Does an Underwriter do?
            </div>
            <div className="FooterBottomTextYes">
              What Does a Data Scientist do?
            </div>
            <div className="FooterBottomTextYes">
              What Does a Registered Nurse do?
            </div>
            <div className="FooterBottomTextYes">
              What Does a Sales Associate do?
            </div>
            <div className="FooterBottomTextYes">What Does a Geologist do?</div>
            <div className="FooterBottomTextYes">What Does a Carpenter do?</div>
            <div className="FooterBottomTextYes FooterLast">
              What Does a Cardiologist do?
            </div>
          </div>
        </div>
      ) : null}

      <div className="FooterBottom">
        <div className="FooterBottomContainer">
          <div className="FooterBottomInformation">
            <img alt="zz" src="img/LOGO.png" className="Footerlogo" />
          </div>
          <div className="FooterBottomInformation">
            <strong>GlassDoor</strong> <br /> About/Press <br /> Awards <br />{" "}
            Blog
          </div>
          <div className="FooterBottomInformation">
            <strong>Employers</strong> <br /> Get a FREE Employer <br /> Account{" "}
            <br /> Employer Center <br /> Post a Job
          </div>
          <div className="FooterBottomInformation">
            <strong>Community</strong> <br /> Help / Contact Us <br />{" "}
            Guidelines <br />
            Terms of Use <br /> Privacy Cookies <br /> Privacy Center <br /> Do
            Not Sell My Personal Information Cookies Consent Tool
          </div>
          <div className="FooterBottomInformation">
            <strong>Work With Us</strong> <br /> Advertisers <br /> Developer{" "}
            <br />
            Carrers
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
