import React from "react";
import IRouter from "./router";
import Tabbar from "./components/Tabbar";
import './views/css/App.css'
export default function App() {
  // store.subsribe 订阅
  return (
    <div>
      {/* 其它内容 */}
      <IRouter>
        <Tabbar></Tabbar>
      </IRouter>
    </div>
  );
}
