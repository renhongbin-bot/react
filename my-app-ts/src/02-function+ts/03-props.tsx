import React from "react";

export default function App() {
  return (
    <div>
      <Child name="aaa" />
    </div>
  );
}
type IChildProps = {
  name: string;
};
// function Child(props: IChildProps) {
//   return <div>Child-{props.name}</div>;
// }

const Child = (props:IChildProps) => {
  return <div>123-{props.name}</div>
}