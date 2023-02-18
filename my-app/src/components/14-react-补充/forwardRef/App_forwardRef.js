import { createRef, forwardRef } from "react";

export default function App() {
  const myref = createRef();
  return (
    <div>
      <Child ref={myref} />
      <button onClick={() => {
        myref.current.focus()
        myref.current.value = ''
      }}>获取焦点</button>
    </div>
  );
}

// 透传ref
const Child = forwardRef((props, ref) => {
  return (
    <div>
      <input
        defaultValue={"123213"}
        style={{ background: "pink" }}
        ref={ref}
      />
    </div>
  );
});
