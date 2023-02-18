import React, { Component } from 'react'

export default class App extends Component {
  state ={
    myname: 'zs  ',
    myage: 100
  }
  static getDerivedStateFromProps(newProps, newState) {
    console.log('getDrivedStateFromProps')
    return {
      myname: newState.myname.substring(0, 1).toUpperCase() + newState.myname.substring(1)
    }
  }
  render() {
    return (
      <div>
        <button onClick={() => {
          this.setState({
            myname: 'xm'
          })
        }}>click</button>
        app - {this.state.myname} - { this.state.myage }
      </div>
    )
  }
}
