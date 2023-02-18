import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Redirct({to}) {
    const redirct = useNavigate()
    useEffect(() => {
        redirct(to, {replace:true})
    })
  return null
}
