import {call, put} from 'redux-saga/effects'

function *getList1() {
    // 异步处理

    // call函数发异步请求
    let res = yield call(getListAction1) //阻塞的调用fn

    yield put({
        type: 'change-list1',
        payload: res
    })
    // put函数发出新的action
}

function getListAction1() {
    return new Promise(resolve=> {
        setTimeout(() => {
            resolve([111, 222, 333])
        }, 2000)
    })
}
export {getList1}