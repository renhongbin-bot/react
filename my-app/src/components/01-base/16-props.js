import React, { Component } from "react";
import Navbar from "../Navbar";

export default class App extends Component {
  render() {
    // 上面父组件传来的一个对象
    const obj = {
      title: '测试',
      leftShow: false
    }
    return (
      <div>
        <div>
          <h2>首页</h2>
          <Navbar leftShow={false}></Navbar>
        </div>
        <div>
          <h2>列表</h2>
          <Navbar title="列表"></Navbar>
        </div>
        <div>
          <h2>购物车</h2>
          <Navbar title="购物车"></Navbar>
        </div>
        <Navbar {...obj}></Navbar>
      </div>
    );
  }
}
