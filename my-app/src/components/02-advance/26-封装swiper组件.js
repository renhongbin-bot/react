import React, { Component } from "react";
import RSwiper from "./swiper/Swiper";
import RSWiperItem from "./swiper/SwiperItem";

export default class App extends Component {
  state = {
    list: [],
  };
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        list: [
          "https://cdn.pixabay.com/photo/2022/12/16/00/08/herd-7658724__340.jpg",
          "https://cdn.pixabay.com/photo/2022/11/14/20/14/compass-7592447_640.jpg",
          "https://cdn.pixabay.com/photo/2023/01/08/14/56/flower-7705484__340.jpg",
        ],
      });
    }, 1000);
  }
  render() {
    return (
      <div>
        <RSwiper>
          {this.state.list.map((item) => (
            <RSWiperItem key={item}>
              <img src={item}></img>
            </RSWiperItem>
          ))}
        </RSwiper>
      </div>
    );
  }
}
