import React, { Children, useEffect, useMemo, useState } from 'react'
import { List } from 'immutable'

export default function App() {
  // const [state, setState] = useState(arr)
  const a = [3, 2, 1]
  const arr = List(a)
  return (
    <div>
      {arr.map(item => (
        <div key={item}>{item}</div>
      ))}
    </div>
  )
}
