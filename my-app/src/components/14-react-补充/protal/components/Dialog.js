import React from "react";
import { createPortal } from "react-dom";

export default function Dialog(props) {
  // createPortal 把元素传送到其它节点内部(document.body)
  //   虽然createPortal可以被传送到其它的父节点中,但是依然会有冒泡
  return createPortal(
    <div
      style={{
        width: "100%",
        height: "100%",
        position: "fixed",
        left: 0,
        top: 0,
        background: "rgba(0,0,0,0.7)",
        zIndex: 9999,
      }}
    >
      Dialog
      {props.children}
      <button onClick={(e) => props.ev(e)}>close</button>
    </div>,
    document.body
  );
}
