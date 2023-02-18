import React, { Component } from 'react'
import axios from 'axios'
import './css/03-tongxin.css'

const GlobalContext = React.createContext() //创建context对象

class FilmItem extends Component {
  render() {
    let { name, poster, grade, synopsis } = this.props
    return (
      <GlobalContext.Consumer>
        {value => {
          return (
            <div
              className="filmitem"
              onClick={() => {
                value.updateInfo(synopsis)
              }}
            >
              <img src={poster} alt={name}></img>
              <h4>{name}</h4>
              <div>观众评分: {grade}</div>
            </div>
          )
        }}
      </GlobalContext.Consumer>
    )
  }
}

class FilmDetail extends Component {
  render() {
    return (
      <GlobalContext.Consumer>
        {value => {
          return <div className="filmdetail">{value.info}</div>
        }}
      </GlobalContext.Consumer>
    )
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
      <GlobalContext.Provider
        value={{
          info: this.state.info,
          updateInfo: value => {
            this.setState({
              info: value
            })
          }
        }}
      >
        <div>
          {this.state.filmList.map(item => (
            <FilmItem key={item.filmId} {...item}></FilmItem>
          ))}
          <FilmDetail></FilmDetail>
        </div>
      </GlobalContext.Provider>
    )
  }
}
