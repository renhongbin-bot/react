import { List, Map } from 'immutable'
import React, { useState } from 'react'

export default function App() {
  const [info, setInfo] = useState(
    Map({
      name: 'rhb',
      location: Map({
        pro: '辽宁',
        city: '大连'
      }),
      favor: List(['读书', '写代码', '看报'])
    })
  )
  return (
    <div>
      <h1>个人信息</h1>
      <button
        onClick={() => {
          setInfo(info.set('name', 'xm').set('location', info.get('location').set('city', '南充')))
        }}
      >
        修改
      </button>
      <div>
        {info.get('name')}
        <br></br>
        {info.get('location').get('pro') + '-' + info.get('location').get('city')}
        <br></br>
        {info.get('favor').map((item, index) => (
          <li key={item}>
            {item}{' '}
            <button
              onClick={() => {
                setInfo(info.set('favor', info.get('favor').splice(index, 1)))
              }}
            >
              del
            </button>
          </li>
        ))}
      </div>
    </div>
  )
}
