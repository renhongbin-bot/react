import React, { Component } from 'react'

export default class App extends Component {
  render() {
    return (
      <div><Child name={'xiaoming'} /></div>
    )
  }
}
interface IChildProps {
    name: string
}
class Child extends Component<any, IChildProps> {
    render(): React.ReactNode {
        return (
            <div>Clid-{this.props.name}</div>
        )
    }
}