import React, { useEffect, useState } from "react";
import IRouter from "./router";
import Tabbar from "./components/Tabbar";
import store from "./redux/store";
import "./views/css/App.css";
export default function App() {
  console.log(store.getState())
  const [isShow, setIsShow] = useState(store.getState().tabbarRreducer.show)
  // store.subsribe 订阅
  useEffect(() => {
    store.subscribe(() => {
      setIsShow(store.getState().tabbarRreducer.show)
    });
  }, []);
  return (
    <div>
      {/* 其它内容 */}
      <IRouter>
        {isShow && <Tabbar></Tabbar>}
      </IRouter>
    </div>
  );
}
