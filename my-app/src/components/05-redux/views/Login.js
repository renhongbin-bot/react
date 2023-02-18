import React from "react";

export default function Login(props) {
  return (
    <div>
      <button
        onClick={() => {
          window.localStorage.setItem("token", 123);
          props.history.push({ pathname: "/center" });
        }}
      >
        登录
      </button>
    </div>
  );
}
