import React, { Component } from 'react'
import axios from 'axios'
import './css/03-tongxin.css'

class FilmItem extends Component {
  render() {
    let { name, poster, grade, synopsis } = this.props
    return (
      <div className="filmitem" onClick={() => {
        this.props.onEvent(synopsis)
      }}>
        <img src={poster} alt={name}></img>
        <h4>{name}</h4>
        <div>观众评分: {grade}</div>
      </div>
    )
  }
}

class FilmDetail extends Component {
  render() {
    return<div className='filmdetail'>
      {this.props.info}
    </div>
  }
}
export default class App extends Component {
  constructor() {
    super()
    this.state = {
      filmList: [],
      info: ''
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
          <FilmItem key={item.filmId} {...item} onEvent={(value) => {
            this.setState({
              info: value
            })
          }}></FilmItem>
        ))}
        <FilmDetail info={this.state.info}></FilmDetail>
      </div>
    )
  }
}
