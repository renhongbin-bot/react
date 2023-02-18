import React, { useEffect } from "react";
import store from "../mobx/store";

export default function Detail(props) {
  useEffect(() => {
    store.changeHide();
    return () => {
      store.changeShow();
    };
  }, []);
  return <div>Detail-{props.match.params.id}</div>;
}
