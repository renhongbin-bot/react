import React, { Component } from "react";
import Swiper, { Navigation, Pagination } from "swiper";
import "swiper/swiper-bundle.min.css";
Swiper.use([Navigation, Pagination]);

export default class App extends Component {
  state = {
    list: [],
  };
  componentDidMount() {
    setTimeout(() => {
      this.setState(
        {
          list: [111, 222, 333],
        },
        () => {
          new Swiper(".swiper", {
            pagination: {
              el: ".swiper-pagination",
            },
          });
        }
      );
    }, 1000);
  }
  render() {
    return (
      <div>
        <div className="swiper" style={{ height: "200px", background: "pink" }}>
          <div className="swiper-wrapper">
            {this.state.list.map((item) => (
              <div className="swiper-slide" key={item}>
                {item}
              </div>
            ))}
          </div>
        </div>
        <div className="swiper-pagination"></div>
      </div>
    );
  }
}
