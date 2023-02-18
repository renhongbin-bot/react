import { observable, configure, action, runInAction, makeObservable } from "mobx";
import axios from "axios";
// configure 严格模式
configure({
  enforceActions: "always",
});
// 仓库
// const store = observable({
//   isTabbarShow: true,
//   list: [],
//   cityName: "北京",
//   changeShow() {
//     this.isTabbarShow = true
//   },
//   changeHide() {
//     this.isTabbarShow = false
//   }
// }, {
//     //标记方法是action,专门修改可观察的value
//     changeHide: action,
//     changeShow: action
// });

// 装饰器写法
class Store {
  // mobx7.0添加,不添加界面不刷新
  constructor() {
    makeObservable(this)
  }

  @observable isTabbarShow = true;
  @observable list = [];
  @observable cityName = "北京";
  @action changeShow() {
    this.isTabbarShow = true;
  }
  @action changeHide() {
    this.isTabbarShow = false;
  }
  @action async getList() {
    const list = await axios({
      url: "https://m.maizuo.com/gateway?cityId=110100&ticketFlag=1&k=4824139",
      headers: {
        "X-Client-Info":
          '{"a":"3000","ch":"1002","v":"5.2.1","e":"16734363122154986955866113","bc":"110100"}',
        "X-Host": "mall.film-ticket.cinema.list",
      },
    })
      .then((res) => {
        return res.data.data.cinemas;
      })
      .catch((err) => {
        console.log(err);
      });
    runInAction(() => {
      this.list = list;
    });
  }
}
const store = new Store();

export default store;
