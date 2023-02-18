import { Component, createRef } from 'react'
import './css/01-index.css'
export default class App extends Component {
  myref = createRef()
  state = {
    list: ['aa', 'bb', 'cc']
  }
  render() {
    return (
      <div>
        <input ref={this.myref} type={'text'}></input>
        <button onClick={() => this.handClick()}>add1</button>
        <ul>
          {this.state.list.map((item, index) => (
            <li key={index}>
              {/* {item} */}
              <span dangerouslySetInnerHTML={
                {
                  __html: item
                }
              }></span>
              {/* <button onClick={() => this.deleteHandler(item)} style={{ marginLeft: '20px' }}>
                删除
              </button> */}
            </li>
          ))}
        </ul>
        {/* 方案一:三目运算符 */}
        {/* 方案二 直接创建和移除 */}
        {!this.state.list.length && <div>暂无代办事项</div>}
        <div className={!this.state.list.length ? 'hidden' : ''}></div>
      </div>
    )
  }
  handClick = () => {
    // 不要直接修改状态,可能会造成不可预期的问题
    let newList = [...this.state.list]
    newList.push(this.myref.current.value)
    this.setState({
      list: newList
    })
    // 清空输入框
    this.myref.current.value = ''
  }
  deleteHandler = i => {
    let newList = [...this.state.list]
    this.setState({
      list: newList.filter((item) => item !== i)
    })
  }
}
