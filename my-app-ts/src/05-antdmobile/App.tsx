import React, { useEffect, useState } from "react";
import store from "./redux/store";
import IndexRouter from "./router";
export default function App() {
  const [show, setShow] = useState(store.getState().isShow)
  useEffect(() => {
    store.subscribe(() => {
      setShow(store.getState().isShow)
    });
  });
  return (
    <div>
      <IndexRouter></IndexRouter>
      {show && (
        <ul>
          <li>电影</li>
          <li>影院</li>
          <li>我的</li>
        </ul>
      )}
    </div>
  );
}
