import { Outlet, useNavigate } from "react-router-dom";
import FilmItem from "./films/FilmItem";
export default function Film() {
  const navigate = useNavigate()
  const gotoDetail = (id) => {
    navigate(`/detail?id=${id}`)
    // query传参
    // params
  }
  return (
    <div>
      <button onClick={() => gotoDetail(12)}>已经上映</button>
      <FilmItem filmId={12} />
      {/* 同vue中的router-view */}
      <Outlet/>
    </div>
  );
}
