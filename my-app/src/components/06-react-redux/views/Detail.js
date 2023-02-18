import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { hide, show } from '../redux/actionCreator/tabbarActionCreator'
function Detail(props) {
  let {match, hide, show} = props
  useEffect(() => {
    hide()
    return () => {
      show()
    }
  }, [match.params.id, show, hide])
  return (
    <div>Detail-{match.params.id}</div>
  )
}

// connect(将来给孩子传的属性, 将来给孩子传的回调函数)
const mapDispatchToProps = {
  hide,
  show
}
export default connect(null, mapDispatchToProps)(Detail)
