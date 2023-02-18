import React, { Component } from 'react'

export default class App extends Component {
  render() {
    return <div>app</div>
  }
}

// 调度中心
const bus = {
  list: [],
  // 订阅
  subscribe(callback) {
    this.list.push(callback)
  },
  // 发布
  publish(text) {
    // 遍历所有列表,将回调函数执行
    this.list.forEach(callback => {
      callback && callback(text)
    })
  }
}
bus.subscribe((value) => {
  console.log('111',value)
})

setTimeout(() => {
  bus.publish('男人')
}, 0)
