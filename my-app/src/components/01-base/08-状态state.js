import { Component } from 'react'

export default class App extends Component {
  // state = {
  //   text: '收藏',
  //   show: false
  // }
  constructor() {
    super()
    this.state = {
      text: '收藏',
      show: false,
      myname: '张三'
    }
  }
  render() {
    return (
      <div>
        <h1>欢迎来到react-{this.state.myname}</h1>
        <button
          onClick={() => {
            this.setState({ show: !this.state.show, myname: '李四' })
            if (!this.state.show) {
              console.log('收藏成功')
            } else {
              console.log('已经取消收藏')
            }
          }}
        >
          {this.state.show ? '取消收藏' : '收藏'}
        </button>
      </div>
    )
  }
}
