import React, { useEffect, useState } from "react";
import request from "../utils/request";
const Film = (props) => {
  const [list, setList] = useState([]);
  useEffect(() => {
    request(
      "https://m.maizuo.com/gateway?cityId=440300&pageNum=1&pageSize=10&type=1&k=4141510",
      {
        headers: {
          "X-Client-Info":
            '{"a":"3000","ch":"1002","v":"5.2.1","e":"16735076762192971646631937"}',
          "X-Host": "mall.film-ticket.film.list",
        },
      }
    ).then((res) => {
      setList(res.data.data.films);
    });
  }, []);
  return (
    <div>
      {list.map((item) => (
        <li key={item.filmId} onClick={() => {
          props.history.push(`/detail/${item.filmId}`)
        }}>
          {item.name}</li>
      ))}
    </div>
  );
};
export default Film;
