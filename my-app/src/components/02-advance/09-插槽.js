import React, { Component } from 'react'

class Child extends Component {
  render() {
    return (
      <div>
        child
        {/* 插槽 */}
        {this.props.children[0]}
        {this.props.children[1]}
        {this.props.children[2]}
      </div>
    )
  }
}

export default class App extends Component {
  render() {
    return (
      <div>
        <Child>
          <div>11111</div>
          <div>22222</div>
          <div>33333</div>
        </Child>
      </div>
    )
  }
}
// 1.为了复用
// 2.一定程度减少了父子通信