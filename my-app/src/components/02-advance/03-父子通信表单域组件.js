import React, { Component } from 'react'

class Field extends Component {
  render() {
    return (
      <div style={{ background: 'pink' }}>
        <label>{this.props.label}</label>
        <input
          value={this.props.value}
          type={this.props.type}
          onChange={e => {
            this.props.onChangeEvent(e.target.value)
          }}
        />
      </div>
    )
  }
}

export default class App extends Component {
  state = {
    username: '',
    password: ''
  }
  render() {
    return (
      <div>
        <h1>登录页面</h1>
        <Field
          label="用户名"
          value={this.state.username}
          type="text"
          onChangeEvent={value => {
            this.setState({ username: value })
          }}
        ></Field>
        <Field
          label="密码"
          value={this.state.password}
          type="password"
          onChangeEvent={value => {
            this.setState({ password: value })
          }}
        ></Field>
        <button onClick={() => console.log(this.state.username, this.state.password)}>登录</button>
        <button onClick={() => {this.setState({username: '', password: ''})}}>取消</button>
      </div>
    )
  }
}
