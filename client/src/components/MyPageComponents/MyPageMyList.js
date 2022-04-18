import styled, { createGlobalStyle } from 'styled-components';
import { useState, useEffect } from 'react';
import { Link, Redirect } from "react-router-dom";
import { Tab } from './Tab';

const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef;
  }
`;

const ListContainer = styled.div`
  max-width: 700px;
  margin: 10px auto 100px;
  text-align: center;
  border: 1px solid;
  /* box-shadow: 3px 3px 3px 3px gray; */
  box-shadow: 3px 3px 3px 3px red;
  color: aliceblue;
  /* color: aliceblue; */
  background-color: salmon;
`;
const Title = styled.h3`
  margin: 19px 0 8px;
  font-size: 14px;
  font-weight: 700;
  text-align:left;
`;
const Title2 = styled.h3`
  display: inline-block;
  margin: 19px 0 8px;
  font-size: 20px;
  font-weight: 700;
  text-align:left;
`;
const Box1 = styled.button`
  text-align: center;
  display: inline-block;
  font-size: 20px;
  position: relative;
  width: 20%;
  height: 51px;
  border: solid 3px red;
  padding: 10px 10px 10px 10px;
  border-radius: 10px;
  box-sizing: border-box;
  border-radius: 10px;
  color: aliceblue;
  background-color: black;
  box-shadow: 3px 3px 3px 3px #e2a3ae;
  margin-right: 3rem;
  z-index: -10;

  &:hover {
    text-decoration: underline;
    transform: translateY(-3px);
  }
  &:active {
    text-decoration: none;
  }
  & + & {
    margin-top: 20px;
  }
`;

const BoxWrapper = styled.div`
  margin: 50px 50px 0px 700px;
  padding: .5rem;
`;

const MylistComponent = () => {

  return (
    <>
    <GlobalStyle />
    <BoxWrapper>
        <Link to="/mypage/myinfo">
          <Box1>✍️회원정보수정</Box1>
        </Link>
        <Link to="/mypage/mylist">
          <Box1>📑내역 관리</Box1>
        </Link>
    </BoxWrapper>
      <ListContainer>
        <br/>
        <Tab/>
      </ListContainer>
    </>
  );
};
export default MylistComponent;
