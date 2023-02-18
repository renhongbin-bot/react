import React, { Component } from 'react'

class Child extends Component {
  componentDidMount() {
    window.onresize = () => {
      console.log('resize')
    }

    this.timer = setInterval(() => {
      console.log(111)
    }, 1000)
  }
  componentWillUnmount() {
    console.log('un mount')
    window.onresize = null
    clearInterval(this.timer)
  }
  render() {
    return <div>child</div>
  }
}

export default class App extends Component {
  state = {
    isCreated: true
  }
  render() {
    return (
      <div>
        <button onClick={() => {
          this.setState({
            isCreated: !this.state.isCreated
          })
        }}>click</button>
        { this.state.isCreated && <Child></Child> }
      </div>
    )
  }
}
