import React, { Component } from 'react'

export default class App extends Component {
  state = {
    myhtml: '<h1>后端的HTML</h1>'
  }
  render() {
    return (
      <div dangerouslySetInnerHTML={{
        __html: this.state.myhtml
      }}></div>
    )
  }
}
