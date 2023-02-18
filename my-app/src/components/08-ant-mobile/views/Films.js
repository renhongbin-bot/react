import { Redirect, Route, Switch } from 'react-router-dom'
import NowPlaying from './films/NowPlaying'
import Comm from './films/Comm'
import style from './css/film.module.css'
import { Swiper, Toast, Tabs } from 'antd-mobile'

export default function Films(props) {
  const colors = ['#ace0ff', '#bcffbd', '#e4fabd', '#ffcfac']
  const items = colors.map((color, index) => (
    <Swiper.Item key={index}>
      <div
        className={style.content}
        style={{ background: color }}
        onClick={() => {
          Toast.show(`你点击了卡片 ${index + 1}`)
        }}
      >
        {index + 1}
      </div>
    </Swiper.Item>
  ))
  return (
    <div className={style.film}>
      <Swiper autoplay>{items}</Swiper>
      <div style={{position: 'sticky', top: 0, background: '#fff', zIndex: '1000'}}>
        <Tabs
          onChange={key => {
            props.history.push(key)
          }}
          activeKey={props.location.pathname}
        >
          <Tabs.Tab title="正在热映" key="/films/nowplaying"></Tabs.Tab>
          <Tabs.Tab title="即将上映" key="/films/comm"></Tabs.Tab>
        </Tabs>
      </div>
      <Switch>
        <Route path="/films/nowplaying" component={NowPlaying} />
        <Route path="/films/comm" component={Comm} />
        <Redirect from="/films" to="/films/nowplaying" />
      </Switch>
    </div>
  )
}
