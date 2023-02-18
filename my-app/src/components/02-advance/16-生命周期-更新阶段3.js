import React, { Component } from 'react'

class Child extends Component {
  state = {
    title: ''
  }
  componentWillReceiveProps(newProps) {
    // 最先获取父组件传来的props,进行ajax处理
    // 可以把属性装换为自己孩子的状态
    this.setState({
      title: newProps.text + '小明'
    })
    console.log('componentWillReceiveProps', newProps, this.state.title)
  }
  render() {
    return (
      <div>child-{this.state.title}</div>
    )
  }
}

export default class App extends Component {
  state = {
    text: 111
  }
  render() {
    return (
      <div>
        <span>{this.state.text}</span>
        <button onClick={() => {
          this.setState({
            text: 222
          })
        }}>click</button>
        <Child text={this.state.text}></Child>
      </div>
    )
  }
}
