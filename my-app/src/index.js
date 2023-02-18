// import React from 'react'
// reactDOM帮助我们把react组件渲染到页面
// import ReactDOM  from 'react-dom'
import { createRoot } from "react-dom/client";
import App from "./components/16-react-router-6/App";
import { Provider } from "mobx-react";
import store from "./components/10-mobx/mobx/store";
// import { Provider } from "react-redux";
// import { store, presistor } from "./components/08-ant-mobile/redux/store";
// import { PersistGate } from "redux-persist/integration/react";
/*
jsx = js + xml
*/
// react 17初始化方式
// ReactDOM.render(<App></App>, document.getElementById('root'))

// react 18初始化方式
const root = createRoot(document.getElementById("root"));
root.render(
  // <Provider store={store}>
  //   <PersistGate loading={null} persistor={presistor}>
  //     <App />
  //   </PersistGate>
  // </Provider>
  <Provider store={store}>
    <App />
  </Provider>
);
