import { useMemo, createContext, useContext, useReducer } from "react";

const store = createContext([]);

const App = () => {
  const reducerValue = useReducer(
    (state, { type, payload }) => {
      switch (type) {
        case "setName":
          return {
            ...state,
            name: payload,
          };
        case "setAge":
          return {
            ...state,
            age: payload,
          };
      }
    },
    {
      name: "Jace",
      age: 18,
    }
  );
  const [state, dispatch] = reducerValue;
  console.log(state,dispatch)
  const storeValue = useMemo(() => reducerValue, reducerValue);
  console.log(storeValue)
  return (
    <store.Provider value={storeValue}>
      <Child />
    </store.Provider>
  );
};

const Child = () => {
  const [state, dispatch] = useContext(store); // 在子组件中使用
  console.log(state, dispatch);
  return (
    <button onClick={() => dispatch({ type: "setName", payload: "John" })}>
      click
    </button>
  );
};

export default App