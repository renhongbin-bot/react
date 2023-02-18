import React, { Component, useEffect } from "react";

function Child() {
  useEffect(() => {
    window.onresize = () => {
      console.log("resize");
    };
    const timer = setInterval(() => {
      console.log(111);
    }, 1000);
    // 传依赖 更新和销毁时执行,不传依赖 销毁时执行
    return () => {
      window.onresize = null;
      clearInterval(timer);
    };
  }, []);
  return <div>Child</div>;
}

export default class App extends Component {
  state = {
    isCreated: true,
  };
  render() {
    return (
      <div>
        <button
          onClick={() => {
            this.setState({
              isCreated: !this.state.isCreated,
            });
          }}
        >
          click
        </button>
        {this.state.isCreated && <Child></Child>}
      </div>
    );
  }
}
