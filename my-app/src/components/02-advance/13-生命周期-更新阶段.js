import React, { Component } from 'react'
import axios from 'axios'
import BScroll from 'better-scroll'

export default class App extends Component {
  state = {
    myname: '张三',
    filmList: []
  }
  componentDidMount() {
    axios({
      url: 'https://m.maizuo.com/gateway?cityId=440300&pageNum=1&pageSize=10&type=1&k=4141510',
      headers: {
        'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.1","e":"16735076762192971646631937"}',
        'X-Host': 'mall.film-ticket.film.list'
      }
    })
      .then(res => {
        this.setState(
          {
            filmList: res.data.data.films
          },
          () => {
            new BScroll('#warpper')
          }
        )
      })
      .catch(err => {
        console.log(err)
      })
  }
  render() {
    console.log('render')
    return (
      <div>
        <button
          onClick={() => {
            this.setState({
              myname: '李四'
            })
          }}
        >
          更改名字
        </button>
        <span id="myname">{this.state.myname}</span>
        <div id="warpper" style={{ height: '100px', background: 'pink', overflow: 'hidden' }}>
          <ul>
            {this.state.filmList.map(item => (
              <li key={item.filmId}>{item.name}</li>
            ))}
          </ul>
        </div>
      </div>
    )
  }
  UNSAFE_componentWillUpdate() {
    console.log('will update', document.getElementById('myname').innerHTML)
  }
  componentDidUpdate(prevProps, prevState) {
    console.log(prevProps, prevState)
    // 更新后获取dom节点
    if (!prevState.filmList.length) {
      console.log('did update', document.getElementById('myname').innerHTML)
    }
  }
}
