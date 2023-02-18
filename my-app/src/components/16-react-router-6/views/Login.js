import React from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  return (
    <div>
      暂未登录
      <button
        onClick={() => {
          window.localStorage.setItem("token", "1232323213");
          navigate('/center')
        }}
      >
        登录
      </button>
      1231
    </div>
  );
}
