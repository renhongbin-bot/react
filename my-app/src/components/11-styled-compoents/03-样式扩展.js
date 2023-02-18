import React from "react";
import styled from "styled-components";

export default function App() {
  const StyledButton = styled.button`
    width: 100px;
    height: 30px;
    background-color: pink;
  `;
  const StyledButton2 = styled(StyledButton)`
  background-color: skyblue;
  `
  return (
    <div>
      App
      <StyledButton>click</StyledButton>
      <StyledButton2>click2</StyledButton2>
    </div>
  );
}
