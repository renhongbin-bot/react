import React, { Component } from 'react'

class Box extends Component {
  shouldComponentUpdate(newProps) {
    if (this.props.current === this.props.index || newProps.current === newProps.index) {
      return true
    }
    return false
  }
  render() {
    console.log(123)
    return <div style={{ width: '100px', height: '100px', border: this.props.current === this.props.index ? '1px solid pink' : '1px solid gray', margin: '10px', float: 'left' }}></div>
  }
}

export default class App extends Component {
  state = {
    list: ['00', '01', '02', '03', '04', '05', '06', '07', '08', '09'],
    current: 0
  }
  render() {
    return (
      <div>
        <input type="number" onChange={(e) => {
          this.setState({
            current: +e.target.value
          })
        }}/>
        <div style={{ overflow: 'hidden' }}>
          {this.state.list.map((i, index) => (
            <Box key={i} current={this.state.current} index={index}></Box>
          ))}
        </div>
      </div>
    )
  }
}
