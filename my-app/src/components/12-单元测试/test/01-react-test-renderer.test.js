// 官方测试工具，麻烦

import ShallowRender from "react-test-renderer/shallow";
import ReactTestUtil from 'react-dom/test-utils'
import App from "../App";
describe("react-test-render", function () {
  it("app的名字是rhb-todo", function () {
    const render = new ShallowRender();
    render.render(<App />)
    expect(render.getRenderOutput().props.children[0].type).toBe('h1')
    expect(render.getRenderOutput().props.children[0].props.children).toBe('rhb-todo')
  });
  it('删除功能', function() {
    const app = ReactTestUtil.renderIntoDocument(<App/>)
    let todoItems = new ReactTestUtil.scryRenderedDOMComponentsWithTag(app, 'li')
    console.log(todoItems)
    // let deleteButton = todoItems[0].querySelector('button')
    // ReactTestUtil.Simulate.click(deleteButton)
    // let todoItemsAfterClick = ReactTestUtil.scryRenderedDOMComponentsWithTag(app, 'li')
    // expect(todoItems.length - 1).toBe()
    // expect(todoItems.length - 1).toBe(todoItemsAfterClick.length)
  })

  it('添加功能', function() {
    const app = ReactTestUtil.renderIntoDocument(<App/>)
    let todoItems = new ReactTestUtil.scryRenderedDOMComponentsWithTag(app, 'li')
    console.log(todoItems)
    // let addInput = ReactTestUtil.scryRenderedDOMComponentsWithTag(app, 'input')
    // console.log(addInput)
    // addInput.value = 'rhbaaaa'
    // let addButton = ReactTestUtil.scryRenderedDOMComponentsWithClass(app, 'add')
    // ReactTestUtil.Simulate.click(addButton)
    // let todoItemsAfterClick = ReactTestUtil.scryRenderedDOMComponentsWithClass(app, 'li')
    // console.log(todoItems.length+1, todoItemsAfterClick.length)
    // expect(todoItems.length+1).toBe(todoItemsAfterClick.length)
  })
});
