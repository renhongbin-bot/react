import React from "react";
import styled, { keyframes } from "styled-components";

export default function App() {
  const myanimation = keyframes`
    form{
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
    `;
  const StyledDiv = styled.div`
    width: 100px;
    height: 100px;
    background-color: pink;
    animation: ${myanimation} 1s infinite;
  `;
  return (
    <div>
      <StyledDiv>123</StyledDiv>
    </div>
  );
}
