import React, { useEffect, useMemo, useState } from 'react'
import './css/02-maizuo.css'
import axios from 'axios'

export default function Cniema() {
    const [mytext, setMytext] = useState('')
    const [cinemaList, setCinemaList] = useState([])
    useEffect(() => {
        axios({
            url: 'https://m.maizuo.com/gateway?cityId=110100&ticketFlag=1&k=4824139',
            headers: {
                'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.1","e":"16734363122154986955866113","bc":"110100"}',
                'X-Host': 'mall.film-ticket.cinema.list'
            }
        })
            .then(res => {
                setCinemaList(res.data.data.cinemas)
            })
            .catch(err => {
                console.log(err)
            })
    }, [cinemaList])
    const getCinemaList = useMemo(() => cinemaList.filter(item => item.name.toUpperCase().includes(mytext.toUpperCase()) || item.address.toUpperCase().includes(mytext.toUpperCase())), [cinemaList,mytext])
    return (
        <div>
            <input value={mytext} onInput={e => setMytext(e.target.value)}></input>
            {getCinemaList.map(item => {
                return (
                    <dl key={item.cinemaId}>
                        <dt>{item.name}</dt>
                        <dd>{item.address}</dd>
                    </dl>
                )
            })}
        </div>
    )
}
