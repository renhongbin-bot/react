import React from 'react'

function NotFound(props) {
  const {a, b} = props
  console.log(props)
  return (
    <div>404-NotFound - {a} - {b}</div>
  )
}

// contennct 原理
function myContent(cb, obj) {
  const value = cb()
  return (Component) => {
    return  (props) => <div><Component {...value} {...props} {...obj} /></div>
  }
}

export default myContent(() => {
  return {
    a:1,
    b:2
  }
}, {
  aa(){},
  bb() {}
})(NotFound)
