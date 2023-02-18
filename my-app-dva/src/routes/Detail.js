import { connect } from 'dva'
import React from 'react'
import { useEffect } from 'react'

function Detail(props) {
  useEffect(() => {
    props.dispatch({
      type: 'maizuo/hide'
    })
    return () => {
      props.dispatch({
        type: 'maizuo/show'
      })
    }
  }, [])
  return (
    <div>Detail-{props.match.params.id}</div>
  )
}

export default connect()(Detail)
