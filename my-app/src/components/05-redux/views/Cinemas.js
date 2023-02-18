import React, { useEffect, useState } from "react";
import store from "../redux/store";
import getCinemaListAction from "../redux/actionCreator/getCinemaListAction";

export default function Cinemas(props) {
  const [cityName] = useState(store.getState().cityReducer.cityName);
  const [cinemaList, setCinemaList] = useState(
    store.getState().cinemaReducer.list
  );
  useEffect(() => {
    if (!store.getState().cinemaReducer.list.length) {
      // 取数据
      store.dispatch(getCinemaListAction());
      console.log(cinemaList);
    } else {
      // 使用缓存
      console.log("使用缓存");
    }
    // 订阅
    const unSubscribe = store.subscribe(() => {
      console.log(store.getState().cinemaReducer.list);
      setCinemaList(store.getState().cinemaReducer.list);
    });
    return () => {
      // 取消订阅
      unSubscribe();
    };
  }, []);
  return (
    <div>
      <div style={{ overflow: "hidden" }}>
        <div
          style={{ float: "left" }}
          onClick={() => {
            props.history.push('/city')
          }}
        >
          {cityName}
        </div>
        <div onClick={() => {
          props.history.push('cinemas/search')
        }} style={{ float: "right" }}>搜索</div>
      </div>
      {cinemaList.map((item) => (
        <dl key={item.cinemaId} style={{ padding: "10px" }}>
          <dt>{item.name}</dt>
          <dd style={{ fontSize: "12px", color: "skyblue" }}>{item.address}</dd>
        </dl>
      ))}
      Cinemas
    </div>
  );
}
