import { useRoutes } from "react-router-dom";
import Redirct from "../components/Redirct";

import React, { lazy, Suspense } from "react";
// 最终实现
export default function Router() {
  const routes = useRoutes([
    {
      path: "/film",
      element: LazyLoad("Film"),
      children: [
        {
          path: "",
          element: <Redirct to="/film/nowplaying" />,
        },
        {
          path: "nowplaying",
          element: LazyLoad("films/Nowplaying"),
        },
        {
          path: "comm",
          element: LazyLoad("film/Comm"),
        },
      ],
    },
    {
      path: "/cinemas",
      element: LazyLoad("Cinemas"),
    },
    {
      path: "/login",
      element: LazyLoad("Login"),
    },
    {
      path: "/cinemas/search",
      element: LazyLoad("Search"),
    },
    {
      path: "/detail/:id",
      element: LazyLoad("Detail"),
    },
    {
      path: "/center",
      element: <AuthComponent>{LazyLoad("Center")}</AuthComponent>,
    },
    {
      path: "/",
      element: <Redirct to="/films" />,
    },
    {
      path: "*",
      element: LazyLoad("NotFound"),
    },
  ]);
  return routes;
}

// 路由拦截
function AuthComponent(props) {
  console.log(props);
  return window.localStorage.getItem("token") ? (
    props.children
  ) : (
    <Redirct to="/login" />
  );
}

// 路由懒加载
const LazyLoad = (path) => {
  const Com = lazy(() => import(`../views/${path}`));
  return (
    <Suspense fallback={<>加载中...</>}>
      <Com />
    </Suspense>
  );
};
