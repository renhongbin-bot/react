import React, { Component } from 'react'

class Navbar extends Component {
  render() {
    return (
      <div style={{ background: 'pink' }}>
        {this.props.children}
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
        <Navbar>
          <button
            onClick={() => {
              this.setState({
                isShow: !this.state.isShow
              })
            }}
          >
            click
          </button>
        </Navbar>
        {this.state.isShow && <Sidebar></Sidebar>}
      </div>
    )
  }
}
