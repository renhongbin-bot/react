import React, { Children, useEffect, useMemo, useState } from 'react'
import { Map } from 'immutable'

export default function App() {
  const info = Map({
    name: 'rhb',
    select: 'aa',
    filter: Map({
      text: '',
      up: true,
      down: false
    })
  })
  const [state, setState] = useState(info)
  useEffect(() => {
    console.log(state.get('filter'))
  }, [state])
  return (
    <div>
      <button
        onClick={() => {
          setState(state.set('name', 'xm'))
          console.log(info)
        }}
      >
        click
      </button>
      {state.get('name')}
      children
    </div>
  )
}
