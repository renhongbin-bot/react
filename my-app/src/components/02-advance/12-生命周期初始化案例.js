import React, { Component } from 'react'
import BScroll from 'better-scroll'

export default class App extends Component {
  state = {
    list: ['111', '222', '333', '444', '555', '666', '777', '888', '999', '000', '121', '123', '124', '125']
  }
  componentDidMount() {
    console.log(document.querySelectorAll('li'))
    new BScroll('#wrapper')
  }
  componentWillMount() {
    console.log(document.querySelectorAll('li'))
  }
  render() {
    return (
      <div>
        <div id='wrapper' style={{height:'200px', background: 'pink', overflow: 'hidden'}}>
          <ul>
            {this.state.list.map(item => <li key={item}>{item}</li>)}
          </ul>
        </div>
      </div>
    )
  }
}
