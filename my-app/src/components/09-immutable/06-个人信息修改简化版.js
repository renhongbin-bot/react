import { fromJS } from 'immutable'
import React, { useState } from 'react'

export default function App() {
  const [info, setInfo] = useState(
    fromJS({
      name: 'rhb',
      location: {
        pro: '辽宁',
        city: '大连'
      },
      favor: ['读书', '写代码', '看报']
    })
  )
  return (
    <div>
      <h1>个人信息</h1>
      <button
        onClick={() => {
          setInfo(info.set('name', 'xm').setIn(['location', 'city'], '南充'))
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
                setInfo(info.updateIn(['favor'], list => list.splice(index, 1)))
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
