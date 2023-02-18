import React, { Component } from "react";

export default class App extends Component {
  myref = React.createRef();
  state = {
    list: [111, 222, 333, 444],
  };
  getSnapshotBeforeUpdate() {
    //获取容易高度
    console.log(this.myref.current.scrollHeight);
    return this.myref.current.scrollHeight - this.myref.current.scrollTop;
  }
  componentDidUpdate(oldProps, oldState, value) {
    console.log(this.myref.current.scrollTop,this.myref.current.scrollHeight,value)
    this.myref.current.scrollTop = this.myref.current.scrollHeight - value
    console.log(this.myref.current.scrollTop)
  }
  render() {
    return (
      <div>
        <button
          onClick={() => {
            this.setState({
              list: [
                ...[12, 13, 14, 15, 16, 17, 22, 18, 19, 20],
                ...this.state.list,
              ],
            });
          }}
        >
          来邮件
        </button>
        <h1>邮箱应用</h1>
        <div style={{ height: "200px", overflow: "auto" }} ref={this.myref}>
          <ul>
            {this.state.list.map((item) => (
              <li key={item} style={{ height: "100px", background: "pink" }}>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}
