import React, { useState } from "react";

export default function App() {
  const [list, setList] = useState(["111", "222", "333"]);
  const [text, setText] = useState("");
  return (
    <div>
      <h1>rhb-todo</h1>
      <input
        type={"text"}
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
      ></input>
      <button
        className="add"
        onClick={() => {
          setList([...list, text]);
          setText("");
        }}
      >
        add
      </button>
      <ul>
        {list.map((item, index) => (
          <li key={index}>
            {item}
            <button
              onClick={() => {
                const newList = [...list];
                newList.splice(index, 1);
                setList(newList);
              }}
            >
              del
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
