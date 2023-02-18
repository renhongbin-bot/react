import React, { useContext, useEffect, useReducer } from "react";
import axios from "axios";
import "./css/03-tongxin.css";

const GlobalContext = React.createContext(); //创建context对象
const initState = {
  filmList: [],
  info: "",
  type: "",
};
const reducer = (oldState, action) => {
  console.log(oldState, action);
  const newState = { ...oldState };
  switch (action.type) {
    case "get-film-list":
      newState.filmList = action.value;
      return newState;
    case "set-info":
      newState.info = action.value;
      return newState;
    case "set-type":
      newState.type = action.value;
      return newState;
    default:
      return oldState;
  }
};
function FilmItem(props) {
  let { name, poster, grade, synopsis, director } = props;
  const value = useContext(GlobalContext);
  return (
    <div
      className="filmitem"
      onClick={() => {
        value.dispatch({
          type: "set-info",
          value: synopsis,
        });
        value.dispatch({
          type: "set-type",
          value: director,
        });
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
  return (
    <div className="filmdetail">
      <p>{value.state.type}</p>
      <p>{value.state.info}</p>
    </div>
  );
}
export default function App() {
  const [state, dispatch] = useReducer(reducer, initState);
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
        dispatch({
          type: "get-film-list",
          value: res.data.data.films,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <GlobalContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      <div>
        {state.filmList.map((item) => (
          <FilmItem key={item.filmId} {...item}></FilmItem>
        ))}
        <FilmDetail></FilmDetail>
      </div>
    </GlobalContext.Provider>
  );
}
