import React, { Component } from "react";
interface IState {
  isShow: boolean;
}
export default class App extends Component<any, IState> {
  state = {
    isShow: true,
  };
  render() {
    return (
      <div>
        App
        <Navbar title="首页" cb={() => {
          this.setState({
            isShow: !this.state.isShow
          })
        }}></Navbar>
        {this.state.isShow && <SideBar></SideBar>}
      </div>
    );
  }
}
interface INavbarProps {
  title: string;
}
class Navbar extends Component<any, INavbarProps> {
  render(): React.ReactNode {
    return (
      <div>
        navbar-{this.props.title}
        <button onClick={() => this.props.cb()}>click</button>
      </div>
    );
  }
}

class SideBar extends Component {
  render(): React.ReactNode {
    return <div>sidebar</div>;
  }
}
