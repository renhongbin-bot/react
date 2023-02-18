import React, { Component } from 'react'

export default class App extends Component {
  UNSAFT_componentWillMount() {
    console.log('第一次未挂载 will-moute')
  }
  componentDidMount() {
    console.log('第一次已经挂载 did-moute')
    // 数据请求
    // 订阅函数
    // setinterval
    // 基于创建完的dom进行初始化...
  }
  // 初始化阶段:只能访问this.props和this.state,不允许修改状态和dom输出
  render() {
    return (
      <div>
        app
      </div>
    )
  }
}
