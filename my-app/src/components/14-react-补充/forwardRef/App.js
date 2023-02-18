import { createRef, useEffect } from "react";

export default function App() {
  let inputRef = null;
  return (
    <div>
      <Child
        callback={(el) => {
            console.log(el)
          inputRef = el;
        }}
      />
      <button onClick={() => {
        inputRef.current.focus()
        inputRef.current.value = ''
      }}>获取焦点</button>
    </div>
  );
}

function Child(props) {
  const myref = createRef();
  useEffect(() => {
    props.callback(myref);
  }, [myref, props]);
  return (
    <div>
      <input
        defaultValue={"123213"}
        style={{ background: "pink" }}
        ref={myref}
      />
    </div>
  );
}
