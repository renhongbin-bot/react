import { useState } from "react";

export default function App() {
  const [state, setState] = useState<string>("rhb");
  return (
    <div>
      app-{state.substring(0, 1).toLocaleUpperCase() + state.substring(1)}
      <button onClick={() => {
        setState('cht')
      }}>click</button>
    </div>
  );
}
