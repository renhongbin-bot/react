import React, { Component } from 'react'

class Navbar extends Component {
  // computed() {
  //   addNum() {
  //     return 
  //   }
  // }
  render() {
    return (
      <div style={{ background: 'pink' }}>
        <button
          onClick={() => {
            this.props.event() //调用父组件传来的回调函数
          }}
        >
          click
        </button>
        <span>navbar</span>
      </div>
    )
  }
}

class Sidebar extends Component {
  render() {
    return (
      <div style={{ background: 'skyblue', width: '200px' }}>
        <ul>
          <li>11111</li>
          <li>11111</li>
          <li>11111</li>
          {/* {this.props.children} */}
          <li>11111</li>
          <li>11111</li>
          <li>11111</li>
        </ul>
      </div>
    )
  }
}

export default class App extends Component {
  state = {
    isShow: true
  }
  render() {
    return (
      <div>
        <Navbar
          event={() => {
            this.setState({
              isShow: !this.state.isShow
            })
          }}
        ></Navbar>
        {this.state.isShow && (
          <Sidebar>
            {/* <h3>123</h3> */}
          </Sidebar>
        )}
      </div>
    )
  }
}

// 父传子: 属性
// 子传父: 回调函数 callback
