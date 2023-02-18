import React from "react";
import styled from "styled-components";

export default function App() {
  const Styledinput = styled.input`
    outline: none;
    border-radius: 10px;
    border-bottom: 1px solid red;
    padding-left: 10px;
  `;
  const StyledDiv = styled.div`
    background: ${(props) => props.bg};
    width: 100px;
    height: 100px;
  `;
  return (
    <div>
      App
      <Styledinput type={"text"} placeholder="请输入" />
      <StyledDiv bg="red"></StyledDiv>
    </div>
  );
}
