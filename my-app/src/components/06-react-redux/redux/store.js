// 1.引入redux
import { applyMiddleware, combineReducers, createStore, compose } from "redux";
import reduxPromise from "redux-promise";
import reduxThunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import cityReducer from "./reducers/cityReducers";
import tabbarRreducer from "./reducers/tabbarReducers";
import cinemaReducer from "./reducers/cinemaReducers";

const persistConfig = {
  key: "city",
  storage,
  whitelist: ['cityReducer']
};
const reducer = combineReducers({
  cityReducer,
  tabbarRreducer,
  cinemaReducer,
});

const persistedReducer = persistReducer(persistConfig, reducer);
// 2.createStore(reducer)

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  persistedReducer,
  composeEnhancers(applyMiddleware(reduxThunk, reduxPromise))
);
const presistor = persistStore(store);

export { store, presistor };
// store.dispatch
// store.subscribe
// store.getState()

// redux简单源码
// function createRhbStore(reducer) {
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
