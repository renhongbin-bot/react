import React from "react";

export default function Center(props) {
  return (
    <div>
      已登录
      <button
        onClick={() => {
          window.localStorage.clear();
          props.history.replace("/login");
        }}
      >
        退出登录
      </button>
    </div>
  );
}
