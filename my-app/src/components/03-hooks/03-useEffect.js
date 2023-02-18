import { useEffect, useState } from "react";
import axios from "axios";

export default function App() {
  const [list, setList] = useState([]);
//   副作用函数
  useEffect(() => {
    axios({
      url: "https://m.maizuo.com/gateway?cityId=110100&ticketFlag=1&k=4824139",
      headers: {
        "X-Client-Info":
          '{"a":"3000","ch":"1002","v":"5.2.1","e":"16734363122154986955866113","bc":"110100"}',
        "X-Host": "mall.film-ticket.cinema.list",
      },
    })
      .then((res) => {
        setList(res.data.data.cinemas);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []); //传空数组,说明不依赖于任何东西,只会执行一次
  return (
    <div>
      <ul>
        {list.map((item) => (
          <li key={item.cinemaId}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}
