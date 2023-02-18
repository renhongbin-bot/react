import { call, put, takeEvery } from "redux-saga/effects";
import axios from "axios";

function* watchSaga() {
  yield takeEvery("get-cinemalist", getCinemaList);
}

function* getCinemaList() {
  let res = yield call(getCinemaAction);

  yield put({
    type: "change-cinemalist",
    value: res,
  });
}

function getCinemaAction() {
  return axios({
    url: "https://m.maizuo.com/gateway?cityId=110100&ticketFlag=1&k=4824139",
    headers: {
      "X-Client-Info":
        '{"a":"3000","ch":"1002","v":"5.2.1","e":"16734363122154986955866113","bc":"110100"}',
      "X-Host": "mall.film-ticket.cinema.list",
    },
  })
    .then((res) => {
      return res.data.data.cinemas
    })
    .catch((err) => {
      console.log(err);
    });
}

export default watchSaga