import React, { useEffect } from 'react'

export default function Detail(props) {
  useEffect(() => {
    // store.dispatch 通知
    return () => {

    }
  }, [])
  return (
    <div>Detail-{props.match.params.id}</div>
  )
}
