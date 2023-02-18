import React from "react";
import styled from "styled-components";

export default function App() {
  const StyledChild = styled(Child)`
    background-color: pink;
    width: 100px;
    height: 100px;
    .box {
        color: aqua;
    }
  `;
  return (
    <div>
      <StyledChild />
    </div>
  );
}

function Child(props) {
  return <div className={props.className}>
    123
    <div className="box">312</div>
  </div>;
}
