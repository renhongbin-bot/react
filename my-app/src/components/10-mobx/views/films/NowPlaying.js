import React, { useEffect, useState } from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";

export default function NowPlaying(props) {
  const [filmList, setFilmList] = useState([]);
  useEffect(() => {
    axios({
      url: "https://m.maizuo.com/gateway?cityId=440300&pageNum=1&pageSize=10&type=1&k=4141510",
      headers: {
        "X-Client-Info":
          '{"a":"3000","ch":"1002","v":"5.2.1","e":"16735076762192971646631937"}',
        "X-Host": "mall.film-ticket.film.list",
      },
    })
      .then((res) => {
        setFilmList(res.data.data.films);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  // const handleChangePage = (id) => {
  //   console.log("click");
  //   // window.location.href = `#/detail/${id}`
  //   // 1.动态路由传参 params
  // props.history.push(`/detail/${id}`);

  //   //2.传参 query
  //   // history.push({pathname: '/detail', query: {id: id}})
  //   // 3.state传参
  //   // history.push({pathname: '/detail', state: {id}})
  // };
  return (
    <ul>
      {filmList.map((item) => (
        <WithFilmItem key={item.filmId} {...item} />
      ))}
    </ul>
  );
}

function FilmItem(props) {
  const { name, filmId } = props;
  return <li onClick={() => {
    props.history.push(`/detail/${filmId}`);
  }}>{name}</li>;
}
// 跨级传输history
const WithFilmItem = withRouter(FilmItem)
