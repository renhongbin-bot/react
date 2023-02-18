import React, { memo, useState } from "react";

export default function App() {
  let [state, setState] = useState(0);
  let [title, setTitle] = useState("title");
  return (
    <div>
      <button
        onClick={() => {
          setState(state++);
        }}
      >
        click
      </button>
      <button
        onClick={() => {
          setTitle('bbbbb');
        }}
      >
        clickTitle
      </button>
      {state}
      <Child title={title} />
      <ChildRe />
    </div>
  );
}

const Child = memo((props) => {
  console.log(props.title);
  return <div>{props.title}</div>;
});
const ChildRe = () => {
  console.log(111 + "---re");
  return <div>ChildRe</div>;
};
