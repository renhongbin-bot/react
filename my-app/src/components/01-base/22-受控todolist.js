import { Component } from 'react'
import './css/01-index.css'
export default class App extends Component {
  state = {
    list: [
      {
        id: 1,
        text: 'aa',
        isChecked: false
      },
      {
        id: 2,
        text: 'bb',
        isChecked: false
      },
      {
        id: 3,
        text: 'cc',
        isChecked: true
      }
    ],
    mytext: ''
  }
  render() {
    return (
      <div>
        <input value={this.state.mytext} onChange={e => this.setState({ mytext: e.target.value })}></input>
        <button onClick={() => this.handClick()}>add1</button>
        <ul>
          {this.state.list.map(item => (
            <li key={item.id}>
              <input type={'checkbox'} onChange={() => this.handChecked(item.id)} checked={item.isChecked}></input>
              {/* {item} */}
              <span
                dangerouslySetInnerHTML={{
                  __html: item.text
                }}
                style={{textDecoration:item.isChecked ? 'line-through' : ''}}
              ></span>
              <button onClick={() => this.deleteHandler(item.id)} style={{ marginLeft: '20px' }}>
                删除
              </button>
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
    newList.push({
      id: new Date().getTime(),
      text: this.state.mytext,
      isChecked: false
    })
    this.setState({
      list: newList,
      mytext: ''
    })
  }
  deleteHandler = id => {
    let newList = [...this.state.list]
    this.setState({
      list: newList.filter(item => item.id !== id)
    })
  }
  handChecked = id => {
    let newlist = [...this.state.list]
    newlist.forEach(item => {
      if (id === item.id) {
        item.isChecked = !item.isChecked
      }
    })
    this.setState({
      list: newlist
    })
  }
}
