import React, { Component } from "react";
import axios from "axios";

export default class Cinema extends Component {
  constructor() {
    super();
    this.state = {
      cinemaList: [],
      cinemaListClone: []
    };
    // 请求数据 axios第三方库,专门用于请求数据
    axios({
      url: "https://m.maizuo.com/gateway?cityId=110100&ticketFlag=1&k=4824139",
      headers: {
        "X-Client-Info":
          '{"a":"3000","ch":"1002","v":"5.2.1","e":"16734363122154986955866113","bc":"110100"}',
        "X-Host": "mall.film-ticket.cinema.list",
      },
    })
      .then((res) => {
        this.setState({
          cinemaList: res.data.data.cinemas,
          cinemaListClone: res.data.data.cinemas
        }, () => {
            console.log(this.state.cinemaList);
        });
        // console.log(this.state.cinemaList);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  //   生命周期发送请求更合适
  render() {
    return (
      <div>
        <input onInput={this.handleInput}></input>
        {this.state.cinemaListClone.map((item) => {
          return (
            <dl key={item.cinemaId}>
              <dt>{item.name}</dt>
              <dd>{item.address}</dd>
            </dl>
          );
        })}
      </div>
    );
  }
  handleInput = (e) => {
    console.log('input', e.target.value)
    const newList = this.state.cinemaList.filter(item => item.name.toUpperCase().includes(e.target.value.toUpperCase()) || item.address.toUpperCase().includes(e.target.value.toUpperCase()))
    this.setState({
        // cinemaList每次都会被重新覆盖
        cinemaListClone: newList
    })
  }
}
