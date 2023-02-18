import React, { useState, useEffect, useMemo } from "react";
import {store} from "../redux/store";
import getCinemaListAction from "../redux/actionCreator/getCinemaListAction";

export default function Search() {
  const [cinemaList, setCinemaList] = useState(
    store.getState().cinemaReducer.list
  );
  const [mytext, setMytext] = useState("");
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
  const getCinemaList = useMemo(
    () =>
      cinemaList.filter(
        (item) =>
          item.name.toUpperCase().includes(mytext.toUpperCase()) ||
          item.address.toUpperCase().includes(mytext.toUpperCase())
      ),
    [cinemaList, mytext]
  );
  return (
    <div>
      <input value={mytext} onInput={(e) => setMytext(e.target.value)}></input>
      {getCinemaList.map((item) => (
        <dl key={item.cinemaId} style={{ padding: "10px" }}>
          <dt>{item.name}</dt>
          <dd style={{ fontSize: "12px", color: "skyblue" }}>{item.address}</dd>
        </dl>
      ))}
    </div>
  );
}
