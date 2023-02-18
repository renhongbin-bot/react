import React, { useState } from "react";
import { connect } from "react-redux";
import { changeCity } from "../redux/actionCreator/cityActionCreator";

function City(props) {
  const {history, changeCity} = props
  const [list] = useState(["北京", "上海", "深圳", "广州"]);
  return (
    <div>
      City
      <ul>
        {list.map((item) => (
          <li
            onClick={() => {
              changeCity(item)
              history.goBack();
            }}
            key={item}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
const mapDispatchToProps = {
  changeCity
}
export default connect(null, mapDispatchToProps)(City)
