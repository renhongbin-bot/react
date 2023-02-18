import { Component } from 'react'

export default class App extends Component {
  render() {
    return (
      <div>
        <input type={'text'}></input>
        <button onClick={() => console.log('add1')}>add1</button> {/* 适用少量函数 */}
        <button onClick={ this.handleClick }>add2</button>
      </div>
    )
  }
  // es5
  // handleClick() {
  //   console.log('add2')
  // }
  handleClick = () => {
    console.log('add2')
  }
}
