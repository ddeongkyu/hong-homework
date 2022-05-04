import React, { useState } from "react";
import styled from "styled-components";
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

const FooterMainContainer = styled.div`
  width: 100%;
  height: 100%;
  background: #e9ecef;
`;
const TextBlock = styled.div`
  font-size: 70px;
  text-align: center;
  color: black;
`;
const IconContaner = styled.div`
  margin-left: 120px;
  margin-right: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const GlassBlock = styled.div`
  width: 25%;
  float: left;
  background: #e9ecef;
`;
const StarBlock = styled.div`
  width: 25%;
  float: left;
  background: #e9ecef;
`;
const DollorBlock = styled.div`
  width: 25%;
  float: left;
  background: #e9ecef;
`;
const PrintBlock = styled.div`
  width: 25%;
  float: left;
  background: #e9ecef;
`;
const FooterTextBlock = styled.div`
  font-size: 20px;
  text-align: center;
  font-weight: bold;
`;
const FooterClick = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const FooterBottom = styled.div`
  width: 100%;
  height: 300px;
  border-top: 2px solid #ced4da;
  box-sizing: border-box;
`;
const FooterBottomContainer = styled.div`
  width: 100%;
  height: 150px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
`;
const FooterBottomInformation = styled.div`
  width: 13%;
  margin-right: 5px;
  box-sizing: border-box;
  margin-top: 40px;
  line-height: 160%;
`;
const FooterBottomLogoBlock = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  boox-sizing: border-box;
  height: 60px;
  background: red;
  border-bottom: 2px solid #ced4da;
`;
const DownloadAppBlock = styled.div`
  width: 23%;
`;
const TwitterLogoBlock = styled.div`
  background: orange;
  width: 23%;
  text-align: center;
`;
const SelectBlock = styled.div`
  background: green;
  width: 23%;
`;
const BoxboxBox = styled.div``;
const FooterBottomTextContainer = styled.div`
  margin-left: 120px;
  margin-right: 120px;
  display: flex;
`;
const FooterBottomTextInformation = styled.div`
  font-size: 17px;
  width: 36%;
  float: left;
`;
const FooterBottomTextYes = styled.div`
  line-height: 160%;
  font-size: 17px;
`;
function Footer() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleInformation = () => {
    setIsOpen((isOpen) => !isOpen);
  };
  return (
    <>
      <FooterMainContainer>
        <TextBlock>어쩔티비 저쩔티비 어쩔티비 저쩔티비</TextBlock>
        <IconContaner>
          <GlassBlock>
            <GiMagnifyingGlass
              style={{
                width: "50%",
                height: "10%",
                marginLeft: "85px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            />
            <FooterTextBlock>Find the Right Job</FooterTextBlock>
          </GlassBlock>
          <StarBlock>
            <GiAlliedStar
              style={{
                width: "50%",
                height: "10%",
                marginLeft: "85px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            />
            <FooterTextBlock>Research Companies</FooterTextBlock>
          </StarBlock>
          <PrintBlock>
            <RiPrinterLine
              style={{
                width: "50%",
                height: "10%",
                marginLeft: "85px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            />
            <FooterTextBlock>Compare Salaries</FooterTextBlock>
          </PrintBlock>
          <DollorBlock>
            <RiMoneyDollarCircleLine
              style={{
                width: "50%",
                height: "10%",
                marginLeft: "85px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            />
            <FooterTextBlock>Apply To Jobs</FooterTextBlock>
          </DollorBlock>
        </IconContaner>
      </FooterMainContainer>
      <FooterClick>
        <BoxboxBox onClick={() => toggleInformation()}>
          {isOpen ? (
            <AiOutlineUp
              style={{
                width: "30px",
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
        </BoxboxBox>
      </FooterClick>
      {isOpen ? (
        <FooterBottomTextContainer>
          <FooterBottomTextInformation>
            <strong>Popular Remote Jobs</strong>
            <FooterBottomTextYes>
              Data entry work from home jobs
            </FooterBottomTextYes>
            <FooterBottomTextYes>
              Customer service work from home jobs
            </FooterBottomTextYes>
            <FooterBottomTextYes>
              Copywriter work from home jobs
            </FooterBottomTextYes>
            <FooterBottomTextYes>
              Project manager work from home jobs
            </FooterBottomTextYes>
            <FooterBottomTextYes>
              Accountant work from home jobs
            </FooterBottomTextYes>
            <FooterBottomTextYes>
              Graphic designer work from home jobs
            </FooterBottomTextYes>
            <FooterBottomTextYes>
              Editor work from home jobs
            </FooterBottomTextYes>
            <FooterBottomTextYes>
              Software developer work from home jobs
            </FooterBottomTextYes>
            <FooterBottomTextYes>
              Healthcare work from home jobs
            </FooterBottomTextYes>
            <FooterBottomTextYes>
              Cyber security work from home jobs
            </FooterBottomTextYes>
            <FooterBottomTextYes>Sales work from home jobs</FooterBottomTextYes>
            <FooterBottomTextYes>
              Transcription work from home jobs
            </FooterBottomTextYes>
            <FooterBottomTextYes>
              Pharmacist work from home jobs
            </FooterBottomTextYes>
            <FooterBottomTextYes>
              Recruiter work from home jobs
            </FooterBottomTextYes>
            <FooterBottomTextYes>
              Attorney work from home jobs
            </FooterBottomTextYes>
            <FooterBottomTextYes>QA work from home jobs</FooterBottomTextYes>
            <FooterBottomTextYes>
              Social mdeia work from home jobs
            </FooterBottomTextYes>
            <FooterBottomTextYes>HR work from home jobs</FooterBottomTextYes>
            <FooterBottomTextYes>
              Paralegal work from home jobs
            </FooterBottomTextYes>
            <FooterBottomTextYes>UX work from home jobs</FooterBottomTextYes>
            <FooterBottomTextYes>
              Data scientist work from home jobs
            </FooterBottomTextYes>
          </FooterBottomTextInformation>
          <FooterBottomTextInformation>
            <strong>Popular Part-Time Jobs</strong>
            <FooterBottomTextYes>Part time jobs in Toronto</FooterBottomTextYes>
            <FooterBottomTextYes>
              Part time jobs in Montreal
            </FooterBottomTextYes>
            <FooterBottomTextYes>Part time jobs in Calgary</FooterBottomTextYes>
            <FooterBottomTextYes>Part time jobs in Ottawa</FooterBottomTextYes>
            <FooterBottomTextYes>
              Part time jobs in Edmonton
            </FooterBottomTextYes>
            <FooterBottomTextYes>
              Part time jobs in Mississauga
            </FooterBottomTextYes>
            <FooterBottomTextYes>
              Part time jobs in Hamilton
            </FooterBottomTextYes>
            <FooterBottomTextYes>Part time jobs in Quebec</FooterBottomTextYes>
            <FooterBottomTextYes>
              Part time jobs in Winnipeg
            </FooterBottomTextYes>
            <FooterBottomTextYes>
              Part time jobs in Vancouver
            </FooterBottomTextYes>
            <FooterBottomTextYes>
              Part time jobs in Brampton
            </FooterBottomTextYes>
            <FooterBottomTextYes>Part time jobs in Surrey</FooterBottomTextYes>
            <FooterBottomTextYes>Part time jobs in Laval</FooterBottomTextYes>
            <FooterBottomTextYes>Part time jobs in London</FooterBottomTextYes>
            <FooterBottomTextYes>Part time jobs in Markham</FooterBottomTextYes>
            <FooterBottomTextYes>
              Part time jobs in Victoria
            </FooterBottomTextYes>
            <FooterBottomTextYes>Part time jobs in Vaughan</FooterBottomTextYes>
            <FooterBottomTextYes>Part time jobs in Windsor</FooterBottomTextYes>
            <FooterBottomTextYes>Part time jobs in Halifax</FooterBottomTextYes>
            <FooterBottomTextYes>
              Part time jobs in Gatineau
            </FooterBottomTextYes>
            <FooterBottomTextYes>
              Part time jobs in Longueuil
            </FooterBottomTextYes>
            <FooterBottomTextYes>Part time jobs in Burnaby</FooterBottomTextYes>{" "}
            <FooterBottomTextYes>Part time jobs in Markham</FooterBottomTextYes>
            <FooterBottomTextYes>
              Part time jobs in Kitchener
            </FooterBottomTextYes>
            <FooterBottomTextYes>
              Part time jobs in Sakatoon
            </FooterBottomTextYes>
            <FooterBottomTextYes>
              Part time jobs in Richmond
            </FooterBottomTextYes>
          </FooterBottomTextInformation>
          <FooterBottomTextInformation>
            <strong>Browse Occupations</strong>
          </FooterBottomTextInformation>
        </FooterBottomTextContainer>
      ) : null}

      <FooterBottom>
        <FooterBottomContainer>
          <FooterBottomInformation>LOGOHERE?</FooterBottomInformation>
          <FooterBottomInformation>
            <strong>GlassDoor</strong> <br /> About/Press <br /> Awards <br />{" "}
            Blog
          </FooterBottomInformation>
          <FooterBottomInformation>
            <strong>Employers</strong> <br /> Get a FREE Employer <br /> Account{" "}
            <br /> Employer Center <br /> Post a Job
          </FooterBottomInformation>
          <FooterBottomInformation>
            <strong>Community</strong> <br /> Help / Contact Us <br />{" "}
            Guidelines <br />
            Terms of Use <br /> Privacy Cookies <br /> Privacy Center <br /> Do
            Not Sell My Personal Information Cookies Consent Tool
          </FooterBottomInformation>
          <FooterBottomInformation>
            <strong>Work With Us</strong> <br /> Advertisers <br /> Developer{" "}
            <br />
            Carrers
          </FooterBottomInformation>
        </FooterBottomContainer>
      </FooterBottom>
      <FooterBottomLogoBlock>
        <DownloadAppBlock>
          Download the App &nbsp; &nbsp;
          <DiAndroid
            style={{ width: "40px", height: "40px", marginTop: "5px" }}
          />
          &nbsp;
          <DiApple style={{ width: "40px", height: "40px" }} />
        </DownloadAppBlock>
        <TwitterLogoBlock>
          <FaTwitch
            style={{ width: "40px", height: "40px", marginTop: "5px" }}
          />
          &nbsp;&nbsp;
          <FaFacebookSquare
            style={{ width: "40px", height: "40px", marginTop: "5px" }}
          />
          &nbsp;&nbsp;
          <FaTwitterSquare
            style={{ width: "40px", height: "40px", marginTop: "5px" }}
          />
          &nbsp;&nbsp;
          <FaYoutubeSquare
            style={{ width: "40px", height: "40px", marginTop: "5px" }}
          />
          &nbsp;&nbsp;
          <FaInstagram
            style={{ width: "40px", height: "40px", marginTop: "5px" }}
          />
        </TwitterLogoBlock>
        <SelectBlock>23234</SelectBlock>
      </FooterBottomLogoBlock>
    </>
  );
}

export default Footer;
