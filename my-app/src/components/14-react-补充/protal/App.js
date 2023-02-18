import React, { useState } from 'react'
import './App.css'
import Dialog from './components/Dialog'
export default function App() {
    const [isShow, setIsShow] = useState(false)
  return (
    <div className='box' onClick={() => {
        console.log('冒泡了');
    }}>
        <div className='left'></div>
        <div className='right'>
        <button onClick={() => {
            setIsShow(true)
        }}>ajax</button>
        {isShow && <Dialog ev={(e) => {
            setIsShow(false)
            e.stopPropagation()
        }}><div>loding...</div></Dialog>}
        </div>
    </div>
  )
}

