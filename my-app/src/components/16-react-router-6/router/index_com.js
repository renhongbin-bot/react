import { Route, Routes } from "react-router-dom";
import Redirct from "../components/Redirct";
import Film from "../views/Film";
// import Cinemas from "../views/Cinemas";
import Center from "../views/Center";
import NotFound from "../views/NotFound";
import Search from "../views/Search";
import Nowplaying from "../views/films/Nowplaying";
import Comm from "../views/films/Comm";
import Detail from "../views/Detail";
import Login from "../views/Login";
import React, { Suspense } from "react";
export default function Router() {
  return (
    <Routes>
      {/* <Route path="/" element={<Film />} />
      <Route index element={<Film />} /> */}
      <Route path="/film" element={<Film />}>
        {/* 指定默认子组件 */}
        <Route index element={<Redirct to="nowplaying" />} />
        <Route path="nowplaying" element={<Nowplaying />} />
        <Route path="comm" element={<Comm />} />
      </Route>
      <Route path="/detail/:id" element={<Detail />} />
      <Route path="/cinemas" element={LazyLoad('Cinemas')} />
      <Route path="/cinemas/search" element={<Search />} />
      <Route path="/login" element={<Login />} />
      <Route
        path="/center"
        element={
          <AuthComponent>
            <Center />
          </AuthComponent>
        }
      />
      <Route path="/" element={<Redirct to="/film" />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

// 路由拦截
function AuthComponent(props) {
  console.log(props)
  return window.localStorage.getItem("token") ? props.children : <Redirct to="/login" />;
}

// 路由懒加载
const LazyLoad = (path) => {
  const Com = React.lazy(() => import(`../views/${path}`))
  return (
    <Suspense fallback={<>加载中...</>}>
      <Com />
    </Suspense>
  )
}
