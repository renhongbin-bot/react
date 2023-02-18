import React, { useRef, useState } from 'react'
import axios from 'axios'
import { List, Image, Button, InfiniteScroll } from 'antd-mobile'

export default function NowPlaying(props) {
  const [filmList, setFilmList] = useState([])
  const [hasMore, setHasMore] = useState(true)
  const pageNum = useRef(1)
  async function loadMore() {
    pageNum.current++
    setHasMore(false)
    axios({
      url: `https://m.maizuo.com/gateway?cityId=440300&pageNum=${pageNum.current}&pageSize=10&type=1&k=4141510`,
      headers: {
        'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.1","e":"16735076762192971646631937"}',
        'X-Host': 'mall.film-ticket.film.list'
      }
    })
      .then(res => {
        if (res.data.data.films.length < 10) {
          setHasMore(false)
        } else {
          setFilmList([...filmList, ...res.data.data.films])
          setHasMore(true)
        }
      })
      .catch(err => {
        console.log(err)
      })
  }
  return (
    <>
      <List>
        {filmList.map(item => (
          <List.Item
            onClick={() => {
              props.history.push(`/detail/${item.filmId}`)
            }}
            key={item.filmId}
            prefix={<Image src={item.poster} width={80} />}
            description={
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <div>
                  <div style={{ textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap', width: '200px', marginTop: '20px' }}>
                    主演:
                    {item.actors.map((item, index) => (
                      <span key={index}>{item.name} </span>
                    ))}{' '}
                  </div>
                  <div style={{ lineHeight: '20px' }}>
                    <span>{item.nation}</span> | <span>{item.runtime}分钟</span>
                  </div>
                </div>
                <div>
                  <Button size="mini" color="warning" fill="outline">
                    购票
                  </Button>
                </div>
              </div>
            }
          >
            {item.name}
          </List.Item>
        ))}
      </List>
      <InfiniteScroll loadMore={loadMore} hasMore={hasMore}></InfiniteScroll>
    </>
  )
}
