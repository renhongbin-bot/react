import React from "react";
import { useNavigate } from "react-router-dom";

export default function Center() {
  const navigate = useNavigate()
  return (
    <div>
      已登录
      <button onClick={() => {
        window.localStorage.clear()
        navigate('/login')
      }}>登出</button>
    </div>
  );
}
