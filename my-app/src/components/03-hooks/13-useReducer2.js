import React, { useContext, useReducer } from "react";

const initalState = {
  a: 1,
  b: 1,
};

const reducer = (oldState, action) => {
  const newState = { ...oldState };
  switch (action.type) {
    case "changeA":
      newState.a++;
      return newState;
    case "changeB":
      newState.b++;
      return newState;
    default:
      return oldState;
  }
};

const GlobalContext = React.createContext();

export default function App() {
  const [state, dispatch] = useReducer(reducer, initalState);
  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      <Child1 />
      <Child2 />
      <Child3 />
    </GlobalContext.Provider>
  );
}

function Child1() {
  const { dispatch } = useContext(GlobalContext);
  return (
    <div style={{ background: "pink" }}>
      <button
        onClick={() => {
          dispatch({
            type: "changeA",
          });
        }}
      >
        改变a
      </button>
      <button
        onClick={() => {
          dispatch({
            type: "changeB",
          });
        }}
      >
        改变b
      </button>
    </div>
  );
}
function Child2() {
  const { state } = useContext(GlobalContext);
  return <div style={{ background: "skyblue" }}>Child2 -{state.a}</div>;
}
function Child3() {
  const { state } = useContext(GlobalContext);
  return <div style={{ background: "yellow" }}>Child3 - {state.b}</div>;
}
