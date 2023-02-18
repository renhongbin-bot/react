import React from 'react'
import { Button } from 'antd'

export default function App() {
  return (
    <div>
      <Button type="primary" onClick={() => {
        console.log('button')
      }}>Primary Button</Button>
    </div>
  )
}
