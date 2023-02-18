import { Component } from 'react'

export default class App extends Component {
  a = 100
  render() {
    return (
      <div>
        <input type={'text'}></input>
        <button onClick={() => console.log('add1', this.a)}>add1</button> {/* 适用少量函数 */}
        <button onClick={this.handleClick2}>add2</button> {/* 适合无参数 */}
        {/* 
        改变this指向方案
        1.call 改变this指向并自动执行
        2.apply 改变this指向并自动执行
        3.bind 改变this指向不会自动执行,需要手动执行(添加())
        */}
        <button onClick={this.handleClick3.bind(this)}>add3</button> {/* 不推荐 */}
        <button onClick={() => this.handleClick4(this.a)}>add4-比较推荐-传参</button> {/* 适合传参 */}
      </div>
    )
  }
  handleClick2 = e => {
    console.log('add2', this.a, e)
  }
  // es5
  handleClick3() {
    console.log('add3', this.a)
  }
  handleClick4 = a => {
    console.log('add4', a)
  }
}

// const obj1 = {
//   name: 'obj1',
//   getName() {
//     console.log(this.name);
//   }
// }
// const obj2 = {
//   name: 'obj2',
//   getName() {
//     console.log(this.name);
//   }
// }
// obj1.getName.bind(obj2)()
// obj2.getName()
// react并不会真正的绑定事件到每一个具体的元素上，而是绑定到根节点, 而是采用事件代理的模式:
