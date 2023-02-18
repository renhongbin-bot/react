import React, { Component } from 'react'
import axios from 'axios'
import './css/03-tongxin.css'
// 订阅中心
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

class FilmItem extends Component {
  render() {
    let { name, poster, grade, synopsis } = this.props
    return (
      <div
        className="filmitem"
        onClick={() => {
          bus.publish(synopsis)
        }}
      >
        <img src={poster} alt={name}></img>
        <h4>{name}</h4>
        <div>观众评分: {grade}</div>
      </div>
    )
  }
}

class FilmDetail extends Component {
  state = {
    detail: ''
  }
  constructor() {
    super()
    bus.subscribe((fileDetail) => {
      this.setState({
        detail: fileDetail
      })
    })
  }
  render() {
    return <div className="filmdetail">{this.state.detail}</div>
  }
}
export default class App extends Component {
  constructor() {
    super()
    this.state = {
      filmList: []
    }
    axios({
      url: 'https://m.maizuo.com/gateway?cityId=440300&pageNum=1&pageSize=10&type=1&k=4141510',
      headers: {
        'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.1","e":"16735076762192971646631937"}',
        'X-Host': 'mall.film-ticket.film.list'
      }
    })
      .then(res => {
        this.setState({
          filmList: res.data.data.films
        })
      })
      .catch(err => {
        console.log(err)
      })
  }
  render() {
    return (
      <div>
        {this.state.filmList.map(item => (
          <FilmItem key={item.filmId} {...item}></FilmItem>
        ))}
        <FilmDetail></FilmDetail>
      </div>
    )
  }
}
