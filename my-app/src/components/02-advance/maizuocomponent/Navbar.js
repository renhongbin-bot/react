import React, { Component } from 'react'

export default class Navbar extends Component {
  render() {
    return (
      <div style={{background: 'pink', width: '100%', display: 'flex', justifyContent: 'space-between'}}>
        <button>返回</button>
        <span>卖座电影</span>
        <button onClick={() => {
          this.props.event()
        }}>center</button>
      </div>
    )
  }
}
