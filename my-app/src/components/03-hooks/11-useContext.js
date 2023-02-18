import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import "./css/03-tongxin.css";

const GlobalContext = React.createContext(); //创建context对象

function FilmItem(props) {
  let { name, poster, grade, synopsis } = props;
  const value = useContext(GlobalContext);
  return (
    <div
      className="filmitem"
      onClick={() => {
        value.updateInfo(synopsis);
      }}
    >
      <img src={poster} alt={name}></img>
      <h4>{name}</h4>
      <div>观众评分: {grade}</div>
    </div>
  );
}

function FilmDetail() {
  const value = useContext(GlobalContext);
  return <div className="filmdetail">{value.info}</div>;
}
export default function App() {
  const [filmList, setFilmList] = useState([]);
  const [info, setInfo] = useState("");
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

  return (
    <GlobalContext.Provider
      value={{
        info: info,
        updateInfo: (value) => {
          setInfo(value);
        },
      }}
    >
      <div>
        {filmList.map((item) => (
          <FilmItem key={item.filmId} {...item}></FilmItem>
        ))}
        <FilmDetail></FilmDetail>
      </div>
    </GlobalContext.Provider>
  );
}
