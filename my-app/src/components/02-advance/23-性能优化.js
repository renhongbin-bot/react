import React, { PureComponent } from 'react'

export default class App extends PureComponent {
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
  componentDidUpdate() {
    console.log('did-update')
  }
}
