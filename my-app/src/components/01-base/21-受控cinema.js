import React, { Component } from 'react'
import './css/02-maizuo.css'
import axios from 'axios'

export default class Cinema extends Component {
  constructor() {
    super()
    this.state = {
      cinemaList: [],
      mytext: ''
      // cinemaListClone: []
    }
    // 请求数据 axios第三方库,专门用于请求数据
    axios({
      url: 'https://m.maizuo.com/gateway?cityId=110100&ticketFlag=1&k=4824139',
      headers: {
        'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.1","e":"16734363122154986955866113","bc":"110100"}',
        'X-Host': 'mall.film-ticket.cinema.list'
      }
    })
      .then(res => {
        this.setState({
          cinemaList: res.data.data.cinemas
        })
      })
      .catch(err => {
        console.log(err)
      })
  }
  //   生命周期发送请求更合适
  render() {
    return (
      <div>
        <input value={this.state.mytext} onInput={e => this.setState({ mytext: e.target.value })}></input>
        {this.getCinemaList().map(item => {
          return (
            <dl key={item.cinemaId}>
              <dt>{item.name}</dt>
              <dd>{item.address}</dd>
            </dl>
          )
        })}
      </div>
    )
  }
  getCinemaList = () => {
    return this.state.cinemaList.filter(item => item.name.toUpperCase().includes(this.state.mytext.toUpperCase()) || item.address.toUpperCase().includes(this.state.mytext.toUpperCase()))
  }
}
