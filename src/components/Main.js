import React from "react";
import styled from "styled-components";
import { VscMail, VscLock } from "react-icons/vsc";

const MainContainer = styled.div`
  background: skyblue;
  height: 500px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BtnContainer = styled.div`
  width: 400px;
  height: 400px;
  background: tomato;
  box-sizing: border-box;
`;

const FacebookBtn = styled.button`
  background: #3b5998;
  color: white;
  width: 300px;
  font-size: 16px;
  line-height: 30px;
  padding: 3px 8px;
  margin-bottom: 10px;
  border-radius: 5px;
  border: thin solid black;
  margin-left: 50px;
  margin-top: 5px;
`;

const GoogleBtn = styled.button`
  display: block;
  background: white;
  color: #f76707;
  width: 300px;
  border-radius: 5px;
  border: thin solid #888;
  box-shadow: 1px 1px 1px grey;
  white-space: nowrap;
  font-size: 16px;
  line-height: 30px;
  padding: 3px 8px;
  margin-left: 50px;
  margin-top: 5px;
`;

const TextBlock = styled.div`
  font-size: 18px;
  text-align: center;
`;

const CreateInput = styled.div`
width: 300px;
background: white;
color: #868e96
border-radius: 5px;
border: thin solid #888;
box-shadow: 1px 1px 1px grey;
white-space: nowrap;
font-size: 16px ;
line-height: 30px ;
padding: 3px 8px ;
box-sizing: border-box;
margin-bottom: 10px;
margin-left: 50px;
margin-top: 5px;
`;

const ContinueBtn = styled.button`
  width: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #4dabf7;
  color: white;
  margin-left: 100px;
  box-sizing: border-box;
  padding: 5px;
  font-size: 16px;
`;

const InputStyle = styled.input`
  border: none;
  width: 200px;
`;
const NewInformationBlock = styled.div`
  width: 100%;
  height: 30px;
  background: thistle;
  display: flex;
  align-items: center;
  justify-content: center;
`;
function Main() {
  return (
    <>
      <MainContainer>
        <BtnContainer>
          <FacebookBtn>Contunue with FaceBook</FacebookBtn>
          <GoogleBtn>Continue with Google</GoogleBtn>
          <TextBlock>or 이 들어갈 자리입니다(with 수평선)</TextBlock>
          <CreateInput>
            <InputStyle placeholder="Create account with Email" />
            <VscMail
              style={{
                width: "30px",
                height: "30px",
                position: "absolute",
                right: "36%",
              }}
            />
          </CreateInput>
          <CreateInput>
            <InputStyle placeholder="Password" type="password" />
            <VscLock
              style={{
                width: "30px",
                height: "30px",
                position: "absolute",
                right: "36%",
              }}
            />
          </CreateInput>
          <ContinueBtn>Continue with Email</ContinueBtn>
          <TextBlock>
            Are you Hiring? <strong>Post Jobs</strong>
          </TextBlock>
        </BtnContainer>
      </MainContainer>
      <NewInformationBlock>
        <strong style={{ color: "red" }}>NEW!&nbsp;</strong> What are the Best
        Places in Work 2022?{" "}
        <strong style={{ color: "blue" }}>&nbsp;See Winners!</strong>
      </NewInformationBlock>
    </>
  );
}

export default Main;
