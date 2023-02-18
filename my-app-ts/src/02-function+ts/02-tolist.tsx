import React, { useRef, useState } from "react";

export default function App() {
  const mytext = useRef<HTMLInputElement>(null);
  const [list, setList] = useState<string[]>(["123", " 321"]);
  return (
    <div>
      <input
        type="text"
        ref={mytext}
        onChange={(e) => {
          mytext.current!.value = e.target.value;
        }}
      />
      <button
        onClick={() => {
          setList([...list, mytext.current!.value]);
          mytext.current!.value = "";
        }}
      >
        add
      </button>
      <ul>
        {list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
