import React from 'react'
import { Map } from 'immutable'

const obj = {
  name: 'rhb',
  arr: [1, 2, 3],
  address: undefined,
  date: new Date()
}

const oldImmuObj = Map(obj)
const newImmuObj = oldImmuObj.set('name', '小明')
console.log(newImmuObj)

export default function App() {
  return (
    <div>
      {oldImmuObj.toJS().name}-{newImmuObj.toJS().name}
    </div>
  )
}
