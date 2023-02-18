import React, { useEffect, useState } from "react";
import {RouteComponentProps} from 'react-router-dom'
import axios from "axios";
export default function Film(props: RouteComponentProps) {
  type IList = {
    name: string;
    filmId: number;
  };
  const [list, setList] = useState<IList[]>([]);
  useEffect(() => {
    axios({
      url: "https://m.maizuo.com/gateway?cityId=440300&pageNum=1&pageSize=10&type=1&k=4141510",
      headers: {
        "X-Client-Info":'{"a":"3000","ch":"1002","v":"5.2.1","e":"16735076762192971646631937"}',
        "X-Host": "mall.film-ticket.film.list",
      },
    }).then((res) => {
      setList(res.data.data.films);
    }).catch(err => {
        console.log(err) 
    })
  }, [setList, list]);
  return (
    <div>
        123
      <ul>
        {list.map((item) => (
          <li
            onClick={() => {
              props.history.push(`/detail/${item.filmId}`)
            }}
            key={item.filmId}
          >
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
