import React, { useState } from "react";

export default function App() {
  const [show, setShow] = useState<boolean>(true);
  return (
    <div>
      App
      <Navbar
      title="app-title"
        navChange={() => {
          setShow(!show);
        }}
      />
      {show && <SideBar />}
    </div>
  );
}
type INavbarProps = {
  navChange: () => void;
  title?: string
};
function Navbar(props: INavbarProps) {
  // 默认值
  const {title = 'defaluetitle'} = props
  return (
    <div>
      nav-{title}
      <button
        onClick={() => {
          props.navChange();
        }}
      >
        click
      </button>
    </div>
  );
}

function SideBar() {
  return <div>side</div>;
}
