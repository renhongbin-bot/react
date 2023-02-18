import React, { Component } from "react";

interface IState {
    name: string
}
export default class App extends Component<any, IState> {
  state: IState = {
    name: "ker",
  };
  render() {
    return (
      <div>
        app-{this.state.name.substring(0, 1).toLocaleUpperCase() + this.state.name.substring(1)}
        <button
          onClick={() => {
            this.setState({
              name: 'xm',
            });
          }}
        >
          click
        </button>
      </div>
    );
  }
}
