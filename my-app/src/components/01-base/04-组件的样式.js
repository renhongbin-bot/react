import { Component } from 'react'
import './css/01-index.css' //导入css模块

export default class App extends Component {
  render() {
    var myname = 'rhb'
    var styleObj = {
      background: 'pink'
    }
    return (
      <div>
        {myname} - {10 > 20 ? 'aaa' : 'bbb'}
        <div style={styleObj}>11111</div>
        {/* 
        推荐使用行内样式,因为react认为每一个组件都是一个独立的整体
        */}
        <div style={{ background: '#ccc' }}>22222</div>
        <div className="active">33333</div>
        <div id="myapp">444444</div>
        <label htmlFor="username">用户名:</label>
        <input type="text" id="username"></input>
      </div>
    )
  }
}
