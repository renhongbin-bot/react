import React, { Component } from "react";
import IRouter from "./router";
import Tabbar from "./components/Tabbar";
import "./views/css/App.css";
import { inject, observer } from "mobx-react";

// 构建一个
@inject("store") @observer
class App extends Component {
  constructor(props) {
    super(props)
    console.log(props.store)
  }
  render() {
    return (
      <div>
        {/* 其它内容 */}
        <IRouter>{this.props.store.isTabbarShow ? <Tabbar></Tabbar>: ''}</IRouter>
      </div>
    );
  }
}

export default App;
