import React, { Component } from 'react'
import axios from 'axios'

export default class App extends Component {
  state = {
    type: 1
  }
  render() {
    return (
      <div>
        <ul>
          <li
            onClick={() => {
              this.setState({
                type: 1
              })
            }}
          >
            正在热映
          </li>
          <li
            onClick={() => {
              this.setState({
                type: 2
              })
            }}
          >
            即将上映
          </li>
        </ul>
        <FilmList type={this.state.type}></FilmList>
      </div>
    )
  }
}

class FilmList extends Component {
  state = {
    list: [],
    type: 1
  }
  componentDidMount() {
    if (this.props.type === 1) {
      axios({
        url: 'https://m.maizuo.com/gateway?cityId=440300&pageNum=1&pageSize=10&type=1&k=4141510',
        headers: {
          'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.1","e":"16735076762192971646631937"}',
          'X-Host': 'mall.film-ticket.film.list'
        }
      })
        .then(res => {
          this.setState({
            list: res.data.data.films
          })
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
  static getDerivedStateFromProps(newProps, newState) {
    console.log('getDrivedStateFromProps', newProps)
    return {
      type: newProps.type
    }
  }
  componentDidUpdate(oldProps, oldState) {
    if(this.state.type === oldState.type) return
    if (this.state.type === 1) {
          axios({
            url: 'https://m.maizuo.com/gateway?cityId=440300&pageNum=1&pageSize=10&type=1&k=4141510',
            headers: {
              'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.1","e":"16735076762192971646631937"}',
              'X-Host': 'mall.film-ticket.film.list'
            }
          })
            .then(res => {
              this.setState({
                list: res.data.data.films
              })
            })
            .catch(err => {
              console.log(err)
            })
        } else {
          axios({
            url: 'https://m.maizuo.com/gateway?cityId=110100&pageNum=1&pageSize=10&type=2&k=7919035',
            headers: {
              'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.1","e":"16735076762192971646631937","bc":"110100"}',
              'X-Host': 'mall.film-ticket.film.list'
            }
          }).then(res => {
            console.log(res.data.data.films)
            this.setState({
              list: res.data.data.films
            })
          })
        }
  }
  render() {
    return (
      <ul>
        filmList-{this.props.type}
        {this.state.list.map(item => (
          <li key={item.filmId}>{item.name}</li>
        ))}
      </ul>
    )
  }
}
