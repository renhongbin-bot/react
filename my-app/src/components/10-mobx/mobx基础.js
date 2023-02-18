import React from "react";
import { observable, autorun } from "mobx";
// 对于普通类型数据监听
var observableNumber = observable.box(10);
var observableName = observable.box("kerwen");

// 第一次执行,之后每次改变也会执行
autorun(() => {
  console.log(observableNumber.get());
});
autorun(() => {
  console.log(observableName.get());
});

setTimeout(() => {
  observableNumber.set(20);
  observableName.set("xiaoming");
});

// 对于复杂类型数据监听
var myobj = observable({
  name: "rhb",
  age: 100,
});

autorun(() => {
  console.log("对象name改变了" + myobj.name);
});

setTimeout(() => {
  myobj.name = "xiaoming";
}, 1000);

export default function App() {
  return <div>App</div>;
}
