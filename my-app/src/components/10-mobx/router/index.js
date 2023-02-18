import React from "react";
import { BrowserRouter as BRouter, Redirect, Route, Switch } from "react-router-dom";
import Films from "../views/Films";
import Cinemas from "../views/Cinemas";
import Center from "../views/Center";
import NotFound from "../views/NotFound";
import Detail from "../views/Detail";
import Login from "../views/Login";
function isAuth() {
  return localStorage.getItem("token");
}
// BrowserRouter没有#,好看,真正朝着后端发请求要页面,这时候没有对应的路径处理路径, 就会404
// 需要后端配置来了404请求,重新渲染index页面
export default function Router(props) {
  return (
    <div>
      <BRouter>
        {/* switch 只匹配第一个 */}
        {props.children}
        <Switch>
          <Route path="/films" component={Films} />
          <Route path="/cinemas" component={Cinemas} />
          {/* <Route path="/center" component={Center} /> */}
          <Route
            path="/center"
            render={(props) => (isAuth() ? <Center {...props} /> : <Redirect to="/login" />)}
          />
          <Route path="/login" component={Login} />
          <Route path="/detail/:id" component={Detail} />
          {/* <Route path="/detail" component={Detail} /> */}

          <Redirect from="/" to="/films" exact />
          <Route component={NotFound}></Route>
        </Switch>
      </BRouter>
    </div>
  );
}
