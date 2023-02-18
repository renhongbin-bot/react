export default [
  { path: "/", component: "index" },
  { path: "/posts/create", component: "posts/create" },
  { path: "/login", component: "login" },
  { path: "/posts/:postId", component: "posts/post" },
  { path: "/login", component: "login" },
  // {
  //   path: "/",
  //   //也可以配置其它路径@~或../
  //   component: "@/layouts/now",
  //   routes: [
  //     { path: "/index", title: "index", component: "index" },
  //     // 动态路由
  //     { path: "/user/:id", component: "user" },
  //     // *通配符
  //     { path: "/user/detail/*", component: "userDetail" },
  //     // component 可以匹配相对路径 从src/pages中找起
  //     { path: "/device", component: "iot/device" },
  //   ],
  // },
];
