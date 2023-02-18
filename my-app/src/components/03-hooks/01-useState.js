import { useState } from "react";

export default function App() {
  const [name, setName] = useState("张三");
  const [age, setAge] = useState(18)
  return (
    <div>
      <button
        onClick={() => {
          setName("李四");
          setAge(23)
        }}
      >
        click
      </button>
      {name}-{age}
    </div>
  );
}
