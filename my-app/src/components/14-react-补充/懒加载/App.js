import React, { useState, lazy, Suspense } from "react";
// import NowPlaying from './components/NowPlaying'
// import Comingsoon from './components/Comingsoon'

// 组件懒加载
const NowPlaying = lazy(() => import("./components/NowPlaying"));
const Comingsoon = lazy(() => import("./components/Comingsoon"));
export default function App() {
  const [type, setType] = useState(1);
  return (
    <div>
      <button onClick={() => setType(1)}>正在热映</button>
      <button onClick={() => setType(0)}>即将上映</button>

      {/* Suspense :切换组件之间的显示 */}
      <Suspense fallback={<div>正在加载中...</div>}>
        {type ? <NowPlaying></NowPlaying> : <Comingsoon></Comingsoon>}
      </Suspense>
    </div>
  );
}
