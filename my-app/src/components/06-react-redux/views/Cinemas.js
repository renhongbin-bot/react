import React, { useEffect } from "react";
import getCinemaListAction from "../redux/actionCreator/getCinemaListAction";
import { connect } from "react-redux";

function Cinemas(props) {
  console.log(props);
  const { cityName, cinemaList, getCinemaListAction, history } = props;
  useEffect(() => {
    if (!cinemaList.length) {
      // 取数据
      getCinemaListAction();
    } else {
      // 使用缓存
      console.log("使用缓存");
    }
  }, [cinemaList, getCinemaListAction]);
  return (
    <div>
      <div style={{ overflow: "hidden" }}>
        <div
          style={{ float: "left" }}
          onClick={() => {
            history.push("/city");
          }}
        >
          {cityName}
        </div>
        <div
          onClick={() => {
            history.push("cinemas/search");
          }}
          style={{ float: "right" }}
        >
          搜索
        </div>
      </div>
      {cinemaList.map((item) => (
        <dl key={item.cinemaId} style={{ padding: "10px" }}>
          <dt>{item.name}</dt>
          <dd style={{ fontSize: "12px", color: "skyblue" }}>{item.address}</dd>
        </dl>
      ))}
      Cinemas
    </div>
  );
}
const mapStateToProps = (store) => {
  console.log(store);
  return {
    cinemaList: store.cinemaReducer.list,
    cityName: store.cityReducer.cityName,
  };
};
const mapDispatchToProps = {
  getCinemaListAction,
};
export default connect(mapStateToProps, mapDispatchToProps)(Cinemas);
