import React from 'react'
import { Badge, TabBar } from 'antd-mobile'
import style from './Tabbar.module.css'

import { AppOutline, UnorderedListOutline, UserOutline } from 'antd-mobile-icons'
import { withRouter } from 'react-router-dom'

function Tabbar(props) {
  const tabs = [
    {
      key: '/films',
      title: '电影',
      icon: <AppOutline />,
      badge: Badge.dot
    },
    {
      key: '/cinemas',
      title: '影院',
      icon: <UnorderedListOutline />,
      badge: '5'
    },
    {
      key: '/center',
      title: '我的',
      icon: <UserOutline />
    }
  ]
  return (
    <div className={style.tabbar}>
      <TabBar
        onChange={key => {
          props.history.push(key)
        }}
        activeKey={'/' + props.location.pathname.split('/')[1]}
      >
        {tabs.map(item => (
          <TabBar.Item key={item.key} icon={item.icon} title={item.title} />
        ))}
      </TabBar>
    </div>
  )
}

export default withRouter(Tabbar)
