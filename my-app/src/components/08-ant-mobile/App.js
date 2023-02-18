import IRouter from "./router";
import Tabbar from "./components/Tabbar";
import "./views/css/App.css";
import { connect } from "react-redux";
function App(props) {
  return (
    <div>
      {/* 其它内容 */}
      <IRouter>
        {props.isShow && <Tabbar></Tabbar>}
      </IRouter>
    </div>
  );
}
const mapStateToProps = (store) => {
  return {
    isShow: store.tabbarRreducer.show
  }
}
export default connect(mapStateToProps)(App)
