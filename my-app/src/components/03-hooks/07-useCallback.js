import { useCallback, useState } from "react";

export default function App() {
  const [text, setText] = useState("");
  const [myname, setMyname] = useState('')
  const [list, setList] = useState(["aa", "bb", "cc"]);
  const handleChange = useCallback((e) => {
    setText(e.target.value);
  }, []);
  const handleAdd = useCallback(() => {
    setList([...list, text]);
    setText("");
  }, [list, text]);
  return (
    <div>
        {myname}-<button onClick={() => {
            setMyname('123')
        }}>change</button>
      <input value={text} onChange={(e) => handleChange(e)} />
      <button onClick={() => handleAdd()}>click</button>
      <ul>
        {list.map((item, index) => (
          <li key={item}>
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
      {!list.length && <div>暂无待办</div>}
    </div>
  );
}
