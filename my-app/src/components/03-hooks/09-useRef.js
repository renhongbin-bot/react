import { useRef, useState } from "react";

export default function App() {
  const [list, setList] = useState(["aa", "bb", "cc"]);
  const myref = useRef()
  return (
    <div>
      <input ref={myref}  />
      <button
        onClick={() => {
          setList([...list, myref.current.value])
          myref.current.value = ''
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
