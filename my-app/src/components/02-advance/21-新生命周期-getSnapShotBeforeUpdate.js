import React, { Component } from 'react'

export default class App extends Component {
  state = {
    mytext: 'zs'
  }
  getSnapshotBeforeUpdate() {
    console.log('getSnapshotBeforeUpdate')
    return 100
  }
  componentDidUpdate() {
    console.log('componentDidUpdate')
  }
  render() {
    return (
      <div>
        <button onClick={() => {
          this.setState({
            mytext: 'ls'
          })
        }}>click</button>
        {this.state.mytext}
      </div>
    )
  }
}
