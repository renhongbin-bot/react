import React from "react";
import { NavLink, Redirect, Route, Switch } from "react-router-dom";
import NowPlaying from "./films/NowPlaying";
import Comm from "./films/Comm";
import style from "./css/film.module.css";

export default function Films() {
  console.log(style);
  return (
    <div className={style.film}>
      <ul>
        <li>
          <NavLink
            activeClassName={style["click-active"]}
            to="/films/nowplaying"
          >
            正在热映
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName={style["click-active"]} to="/films/comm">
            即将上映
          </NavLink>
        </li>
      </ul>
      <Switch>
        <Route path="/films/nowplaying" component={NowPlaying} />
        <Route path="/films/comm" component={Comm} />
        <Redirect from="/films" to="/films/nowplaying" />
      </Switch>
    </div>
  );
}
