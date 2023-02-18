import React, { createRef } from "react";
import request from "../utils/request";

export default function Login(props) {
  const username = createRef();
  const password = createRef();
  return (
    <div>
      用户名:
      <input type={"text"} ref={username} />
      <br />
      密码:
      <input type={"password"} ref={password} />
      <br />
      <button
        onClick={() => {
          request("/users/login", {
            method: "POST",
            body: JSON.stringify({
              username: username.current.value,
              password: password.current.value,
            }),
            headers: {
              "Content-Type": "application/json",
            },
          }).then((res) => {
            if (res.data.ok === "登陆成功") {
              window.localStorage.setItem("token", 1231);
              props.history.push("/center");
            }
            alert(res.data.ok);
          });
        }}
      >
        登录
      </button>
    </div>
  );
}
