import React, { useState } from "react";
import { changeCity } from "../redux/actionCreator/cityActionCreator";
import store from "../redux/store";

export default function City(props) {
  const [list] = useState(["北京", "上海", "深圳", "广州"]);
  return (
    <div>
      City
      <ul>
        {list.map((item) => (
          <li
            onClick={() => {
              store.dispatch(changeCity(item));
              props.history.goBack();
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
