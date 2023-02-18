// 1.引入redux
import { applyMiddleware, combineReducers, createStore, compose } from "redux";
import reduxPromise from "redux-promise";
import reduxThunk from "redux-thunk";
import cityReducer from "./reducers/cityReducers";
import tabbarRreducer from "./reducers/tabbarReducers";
import cinemaReducer from "./reducers/cinemaReducers";
// 2.createstore(reducer)
const reducer = combineReducers({
  cityReducer,
  tabbarRreducer,
  cinemaReducer,
});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(reduxThunk, reduxPromise))
);
// store.dispatch
// store.subscribe
// store.getState()

// redux简单源码
// function createRhbstore(reducer) {
//   const list = [];
//   let state = reducer(undefined, {});
//   function subscribe(callback) {
//     list.push(callback);
//   }
//   function dispatch(action) {
//     state = reducer(state, action);
//     for (let i in list) {
//       list[i] && list[i]();
//     }
//   }

//   function getState() {
//     return state;
//   }
//   return {
//     subscribe,
//     dispatch,
//     getState,
//   };
// }

//纯函数
// 1.对外界没有副作用
// 2.同样的输入得到同样的输出
export default store;
