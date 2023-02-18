import React, { useEffect } from "react";
import { RouteComponentProps } from "react-router-dom";
import store, {show, hide} from "../redux/store";
interface IDetailPropsParam {
  id: string;
}
export default function Detail(props: RouteComponentProps<IDetailPropsParam>) {
  useEffect(() =>{
    store.dispatch(hide(false))
    return(() => {
      store.dispatch(show(true))
    })
  })
  return <div>detail-{props.match.params.id}</div>;
}
