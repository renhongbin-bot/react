import axios from "axios";

// redux-thunk
// function getCinemaListAction() {
//   return (dispatch) => {
//     axios({
//       url: "https://m.maizuo.com/gateway?cityId=110100&ticketFlag=1&k=4824139",
//       headers: {
//         "X-Client-Info":
//           '{"a":"3000","ch":"1002","v":"5.2.1","e":"16734363122154986955866113","bc":"110100"}',
//         "X-Host": "mall.film-ticket.cinema.list",
//       },
//     })
//       .then((res) => {
//         dispatch({
//           type: "change-list",
//           value: res.data.data.cinemas,
//         });
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   };
// }

// redux-promise
// function getCinemaListAction() {
//   return axios({
//     url: "https://m.maizuo.com/gateway?cityId=110100&ticketFlag=1&k=4824139",
//     headers: {
//       "X-Client-Info":
//         '{"a":"3000","ch":"1002","v":"5.2.1","e":"16734363122154986955866113","bc":"110100"}',
//       "X-Host": "mall.film-ticket.cinema.list",
//     },
//   })
//     .then((res) => {
//       return {
//         type: "change-list",
//         value: res.data.data.cinemas,
//       };
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// }

// async awiat (推荐)
async function getCinemaListAction() {
  const list = await axios({
    url: "https://m.maizuo.com/gateway?cityId=110100&ticketFlag=1&k=4824139",
    headers: {
      "X-Client-Info":
        '{"a":"3000","ch":"1002","v":"5.2.1","e":"16734363122154986955866113","bc":"110100"}',
      "X-Host": "mall.film-ticket.cinema.list",
    },
  })
    .then((res) => {
      return {
        type: "change-list",
        value: res.data.data.cinemas,
      };
    })
    .catch((err) => {
      console.log(err);
    });
  return list;
}

export default getCinemaListAction;
