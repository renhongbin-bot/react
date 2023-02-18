import React, { Component } from 'react'

export default class App extends Component {
  state={
    myname: '张三'
  }
  render() {
    return (
      <div>
        <button onClick={() => {
          this.setState({
            myname: '小明'
          })
        }}>click</button>
        <span>{this.state.myname}</span>
      </div>
    )
  }
  // componentDidUpdate() {
  //   console.log('did-update')
  // }
  shouldComponentUpdate(newProps, newState) {
    // true 应该更新 false 阻止更新
    if (JSON.stringify(this.state) !== JSON.stringify(newState)){
      console.log(123)
      return true
    }
    return false
  }
}
