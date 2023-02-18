import React from 'react'

export default function Sidebar(props) {
  let { bg, position } = props
  console.log(position)
  const obj1 = {
    left: 0
  }
  const obj2 = {
    rigth: 0
  }

  const obj = {
    background: bg, width: '200px', position: 'fixed'
  }
  const styleObj = position==='left' ? {...obj, ...obj1} : {...obj, ...obj2}
  return (
    <div style={styleObj}>
      <ul>
        <li>1111</li>
        <li>1111</li>
        <li>1111</li>
        <li>1111</li>
        <li>1111</li>
        <li>1111</li>
        <li>1111</li>
        <li>1111</li>
        <li>1111</li>
      </ul>
    </div>
  )
}

