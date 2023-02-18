import { Component, createRef } from 'react'

export default class App extends Component {
  myref = createRef()
  render() {
    return (
      <div>
        <input ref={this.myref} type={'text'}></input>
        <button onClick={() => console.log('add1', this.myref.current.value)}>add1</button>
      </div>
    )
  }
}