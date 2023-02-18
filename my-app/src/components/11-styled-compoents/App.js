import React from "react";
import styled from "styled-components";
export default function App() {
  const StyledFooter = styled.footer`
    background: yellow;
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 50px;
    text-align:center;
    ul {
        display: flex;
        li {
            flex: 1;
            list-style: none;
            color: pink;
        }
    }
  `;
  return (
    <StyledFooter>
      <ul>
        <li>首页</li>
        <li>列表</li>
        <li>我的</li>
      </ul>
    </StyledFooter>
  );
}
