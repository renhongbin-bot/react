import React, { Component } from 'react'

export default class App extends Component {
  state = {
    list: [111, 222, 333]
  }
  render() {
    // 为了列表的复用和重排 设置key值 提高性能
    // 不涉及列表增加,删除,重排,可以用索引当做key值
    const newlist = this.state.list.map((item, index) => <li key={index}>{item}</li>)
    return (
      <div>
        <ul>
          {newlist}
        </ul>
      </div>
    )
  }
}
