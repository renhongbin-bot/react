import { useState } from "react";

export default function App() {
  const [text, setText] = useState("");
  const [list, setList] = useState(["aa", "bb", "cc"]);
  return (
    <div>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <button
        onClick={() => {
          setList([...list, text]);
          setText("");
        }}
      >
        click
      </button>
      <ul>
        {list.map((item, index) => (
          <li key={item}>
            {item}
            <button onClick={() => {
                const newList = [...list]
                newList.splice(index, 1)
                setList(newList)
            }}>del</button>
          </li>
        ))}
      </ul>
      { !list.length && <div>暂无待办</div> }
    </div>
  );
}
