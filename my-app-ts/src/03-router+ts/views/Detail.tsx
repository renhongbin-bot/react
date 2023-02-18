import React from "react";
import { RouteComponentProps } from "react-router-dom";
interface IDetailPropsParam {
  id: string;
}
export default function Detail(props: RouteComponentProps<IDetailPropsParam>) {
  return <div>detail-{props.match.params.id}</div>;
}
