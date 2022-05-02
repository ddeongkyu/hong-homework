import React from "react";
import styled from "styled-components";
import { RiMoneyDollarCircleLine, RiPrinterLine } from "react-icons/ri";
import { GiAlliedStar, GiMagnifyingGlass } from "react-icons/gi";

const FooterMainContainer = styled.div`
  width: 100%;
  height: 100%;
  background: tomato;
`;
const TextBlock = styled.div`
  font-size: 70px;
  text-align: center;
  color: black;
`;
function Footer() {
  return (
    <FooterMainContainer>
      <TextBlock>Blah Blah Blah Blah</TextBlock>

      <GiMagnifyingGlass
        style={{ width: "15%", height: "15%", marginLeft: "" }}
      />
      <GiAlliedStar style={{ width: "15%", height: "15%", marginLeft: "" }} />

      <RiPrinterLine style={{ width: "15%", height: "15%", marginLeft: "" }} />
      <RiMoneyDollarCircleLine
        style={{ width: "15%", height: "15%", marginLeft: "" }}
      />
    </FooterMainContainer>
  );
}

export default Footer;
