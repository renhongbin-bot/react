import { observer, inject } from "mobx-react";
import React, { useEffect } from "react";

function Cinema({store}) {
  useEffect(() => {
    if (!store.list.length) {
      store.getList();
    }
  }, [store]);
  return (
    <div>
      {store.list.map((item) => (
        <dl key={item.cinemaId} style={{ padding: "10px" }}>
          <dt>{item.name}</dt>
          <dd style={{ fontSize: "12px", color: "skyblue" }}>{item.address}</dd>
        </dl>
      ))}
    </div>
  );
}
const Cinemas = inject("store")(observer(Cinema));
export default Cinemas;
