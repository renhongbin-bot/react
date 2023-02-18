import React from "react";
import style from "./Tabbar.css";
import { NavLink } from "dva/router";
export default function Tabbar() {
  return (
    <footer>
      <ul>
        <li>
          <NavLink to="/film" activeClassName={style.active}>film</NavLink>
        </li>
        <li>
          <NavLink to="/cinema" activeClassName={style.active}>cinema</NavLink>
        </li>
        <li>
          <NavLink to="/center" activeClassName={style.active}>center</NavLink>
        </li>
      </ul>
    </footer>
  );
}
