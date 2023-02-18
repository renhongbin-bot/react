import React, { Component } from "react";
interface IState {
  text: string;
  list: string[];
}
export default class App extends Component<any, IState> {
  state = {
    text: "",
    list: ["123", "321"],
  };
  myref = React.createRef<HTMLInputElement>();
  render() {
    return (
      <div>
        {/* <input
          type={"text"}
          value={this.state.text}
          onChange={(e) => {
            this.setState({
              text: e.target.value,
            });
          }}
        /> */}
        <input type={"text"} ref={this.myref} />
        <button
          onClick={() => {
            console.log((this.myref.current as HTMLInputElement).value);
            this.setState({
              list: [
                ...this.state.list,
                (this.myref.current as HTMLInputElement).value,
              ],
              text: "",
            });
            (this.myref.current as HTMLInputElement).value = "";
          }}
        >
          add
        </button>
        <ul>
          {this.state.list.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    );
  }
}
