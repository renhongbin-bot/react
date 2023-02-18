import { withRouter } from "dva/router";
import React, {useEffect} from "react";
import request from "../utils/request";

export default function Center(props) {
  useEffect(() => {
    request('/users').then(res => {
      console.log(res)
    })
  }, []);

  return (
    <div>
      Center
      <WithChild />
    </div>
  );
}

function Child(props) {
  return (
    <div>
      <button
        onClick={() => {
          window.localStorage.clear();
          props.history.push("/login");
        }}
      >
        退出登录
      </button>
    </div>
  );
}

const WithChild = withRouter(Child);
