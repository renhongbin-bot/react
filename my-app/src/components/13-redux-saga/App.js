import React from "react";
import store from "./redux/store";
// import './02-可执行生成器'

export default function App() {
  return (
    <div>
      <button
        onClick={() => {
          if (!store.getState().list.length) {
            store.dispatch({
              type: "get-list1",
            });
          } else {
            console.log('缓存111',store.getState().list);
          }
        }}
      >
        click-ajax-异步缓存
      </button>
      <button
        onClick={() => {
          if (!store.getState().list2.length) {
            store.dispatch({
              type: "get-list2",
            });
          } else {
            console.log("缓存222", store.getState().list2);
          }
        }}
      >
        click-ajax-异步缓存2
      </button>
    </div>
  );
}
