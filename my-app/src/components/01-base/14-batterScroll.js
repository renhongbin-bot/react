import React, { Component } from "react";
import BetterScroll from "better-scroll";

export default class App extends Component {
  state = {
    list: [],
  };
  render() {
    return (
      <div>
        <button onClick={() => this.getData()}>click</button>
        <div
          className="wrapper"
          style={{ height: "200px", background: "#e8e8e8", overflow: "hidden" }}
        >
          <ul className="content">
            {this.state.list.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
  getData = () => {
    let list = [1, 2, 3, 4, 5, 6, 7, 8, 0, 11, 12, 14, 15, 15, 16, 16];
    this.setState(
      {
        list,
      },
      () => {
        new BetterScroll('.wrapper');
      }
    );
  };
}
