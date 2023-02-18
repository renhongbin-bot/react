import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Navbar extends Component {
  static propTypes = {
    title: PropTypes.string,
    leftShow: PropTypes.bool
  }
  //  默认值1
  static defaultProps = {
    title: '首页'
  }
  render() {
    // 默认值2
    const { title, leftShow = true } = this.props
    console.log(leftShow)
    return (
      <div>
        {leftShow && <button>返回</button>}
        navbar-{title}
        <button>home</button>
      </div>
    )
  }
}
