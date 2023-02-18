import { createStore, applyMiddleware } from "redux";
import reducer from "./reducer";
import createSagaMidlleWare from 'redux-saga'
import watchSaga from "./saga-every";

// 创建saga中间件对象
const SagaMidlleWare = createSagaMidlleWare()
const store = createStore(reducer, applyMiddleware(SagaMidlleWare))

SagaMidlleWare.run(watchSaga) //监听者 saga任务,

export default store