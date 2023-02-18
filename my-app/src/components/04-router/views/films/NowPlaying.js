import React, { useEffect, useState } from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";

export default function NowPlaying(props) {
  const [filmList, setFilmList] = useState([]);
  useEffect(() => {
    axios({
        
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
