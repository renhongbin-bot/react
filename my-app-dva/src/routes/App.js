import { connect } from "dva";
import React from "react";
import Tabbar from "../components/Tabbar";

function App(props) {
  return (
    <div>
      {props.children}
      {props.isShow && <Tabbar />}
    </div>
  );
}
export default connect((state) => {
  return {
    isShow: state.maizuo.isShow
  }
})(App)
