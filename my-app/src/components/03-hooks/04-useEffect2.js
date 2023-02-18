import { useEffect, useState } from 'react'

export default function App() {
    const [name, setName] = useState('zs')
    useEffect(() => {
        setName(name.substring(0,1).toUpperCase() + name.substring(1))
    }, [name])
    // 第一次执行一次,之后name更新也会执行
  return (
    <div>{name}
    <button onClick={() => {
        setName('xm')
    }}>click</button></div>
  )
}
