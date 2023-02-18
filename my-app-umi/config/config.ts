import { defineConfig } from "umi";
import routes from "./routes";
//defineConfig ts代码提示
export default defineConfig({
  // 路由
  routes,
  //   配置mock包含的测试接口
  mock: {
    include: ["/api/users"],
  },
  //   开启的插件
  plugins: ["@umijs/plugins/dist/tailwindcss"],
  apiRoute: {
    platform: 'vercel'
  },
  //   配置代理
  proxy: {
    "/api": {
      target: "http://localhost:3007",
      changeOrigin: true,
      pathRewrite: { "^/api": "" },
    },
  },
  //   路由数据加载
  clientLoader: {},
  npmClient: "pnpm",
  tailwindcss: {},
});
