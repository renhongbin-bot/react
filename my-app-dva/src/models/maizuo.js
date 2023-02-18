import { getCinemaListService } from "../services/maizuo";

export default {
  // 属性名 maizuo.isShow
  namespace: "maizuo",
  state: {
    // 属性值
    isShow: true,
    list: []
  },
  reducers: {
    hide(oldState, action) {
      return { ...oldState, isShow: false };
    },
    show(oldState, action) {
      return { ...oldState, isShow: true };
    },
    changeCinemaList(oldSate, {payload}) {
      return {...oldSate, list: payload}
    }
  },
  subscriptions: {
    setup({dispath, history}) {
      console.log('chushihua1')
    }
  },
  // 异步处理
  effects: {
    *getCinemaList(action, {call, put}) {
      const res = yield call(getCinemaListService)
      yield put({
        type: "changeCinemaList",
        payload: res.data.data.cinemas
      })
    }
  }
};
