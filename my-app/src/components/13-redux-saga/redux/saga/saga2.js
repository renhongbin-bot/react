import { call, put } from "redux-saga/effects";

function* getList2() {
  // 异步处理
  // call函数发异步请求
  let res1 = yield call(getListAction2_1); //阻塞的调用fn
  let res2 = yield call(getListAction2_2, res1); //阻塞的调用fn

  yield put({
    type: "change-list2",
    payload: res2,
  });
  // put函数发出新的action
}

function getListAction2_1() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([444, 222, 333]);
    }, 2000);
  });
}

function getListAction2_2(data) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([...data, "777", "888", "999"]);
    }, 2000);
  });
}
export {getList2}