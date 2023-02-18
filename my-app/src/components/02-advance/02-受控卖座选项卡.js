import { Component } from 'react'
import './css/02-maizuo.css'
import Film from './maizuocomponent/Film'
import Cinema from './maizuocomponent/Cinema'
import Center from './maizuocomponent/Center'
import Tabbar from './maizuocomponent/Tabbar'
import Navbar from './maizuocomponent/Navbar'

export default class App extends Component {
  state = {
    list: [
      {
        id: 1,
        text: '电影'
      },
      {
        id: 2,
        text: '影院'
      },
      {
        id: 3,
        text: '我的'
      }
    ],
    current: 1
  }
  waich = () => {
    switch (this.state.current) {
      case 0:
        return <Film></Film>
      case 1:
        return <Cinema></Cinema>
      case 2:
        return <Center></Center>
      default:
        return null
    }
  }
  render() {
    return (
      <div>
        <Navbar
          event={() => {
            this.setState({
              current: 2
            })
          }}
        ></Navbar>
        {/* 支持函数表达式 */}
        {this.waich()}
        <Tabbar
          list={this.state.list}
          current={this.state.current}
          event={index => {
            this.setState({
              current: index
            })
          }}
        ></Tabbar>
      </div>
    )
  }
}
