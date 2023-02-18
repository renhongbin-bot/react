import { Component } from 'react'
class Child extends Component {
  render () {
    return <h1>child</h1>
  }
}
// 类组件
class Navbar extends Component {
  render() {
    return (
      <div>
        navbar
        <Child></Child>
      </div>
    )
  }
}
// 函数组件
function Swiper() {
  return <div>swiper</div>
}

// es 函数组件
const Tabbar = () => <div>tabbar</div>

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar></Navbar>
        <Swiper></Swiper>
        <Tabbar></Tabbar>
      </div>
    )
  }
}
