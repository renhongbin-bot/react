import React, { useReducer } from "react";
// 处理函数
const reducer = (oldState, action) => {
  let newState = { ...oldState };
  switch (action.type) {
    case "subtract":
      newState.count--;
      return newState;
    case "add":
      newState.count++;
      return newState;
    default:
      return oldState;
  }
};
// 定义在外部的状态对象
const intialState = {
  count: 0,
  // list: []
};
export default function App() {
  const [state, setState] = useReducer(reducer, intialState);
  return (
    <div>
      <button
        onClick={() => {
          setState({
            type: "subtract",
          });
        }}
      >
        -
      </button>
      {state.count}
      <button
        onClick={() => {
          setState({
            type: "add",
          });
        }}
      >
        +
      </button>
    </div>
  );
}
