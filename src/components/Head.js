import React from "react";
import styled from "styled-components";
import { VscArchive } from "react-icons/vsc";

const HeadContainer = styled.div`
  height: 45px;
  background: red;
  width: 100%;
  z-index: -1;
  padding: 10px;
  box-sizing: border-box;
`;
const LogoBlock = styled.div`
  background: thistle;
  width: 150px;
  z-index: 1;
  display: inline;
  margin-top: 30px;

  box-sizing: border-box;
`;
const TextBlock = styled.span`
  background: blue;
  widht: 80px;
  z-index: 1;
  font-size: 18px;
  dixplay: block;
  margin: 20px;
`;
const TextLeft = styled.div`
  background: blue;
  width: 90px
  z-index: 1;
  font-size: 18px;
  display: block;
  float: right;
  margin-left: 20px;
`;
function Head() {
  return (
    <HeadContainer>
      <LogoBlock>LOGO HERE!</LogoBlock>
      <TextBlock>Jobs</TextBlock>
      <TextBlock>Companies</TextBlock>
      <TextBlock>Salaries</TextBlock>
      <TextBlock>Carrers</TextBlock>
      <TextLeft>Sign In</TextLeft>
      <TextLeft>
        <VscArchive />
        Post Jobs
      </TextLeft>
      <TextLeft>For Employers</TextLeft>
    </HeadContainer>
  );
}

export default Head;
