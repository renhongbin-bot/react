import React, { Component } from 'react'

export default class App extends Component {
  state = {
    username: '张三'
  }
  render() {
    return (
      <div>
        <h1>登录页</h1>
        {/* 受控 */}
        <input type="text" value={this.state.username} onChange={(e) => {this.setState({username: e.target.value})}}></input>
        <button onClick={() => {
          console.log(this.state.username);
        }}>登录</button>
        <button onClick={() => {
          this.setState({username: ''})
        }}>重置</button>
      </div>
    )
  }
}
