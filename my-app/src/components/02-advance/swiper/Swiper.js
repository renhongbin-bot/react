import React, { Component } from "react";
import Swiper, { Navigation, Pagination } from "swiper";
import "swiper/swiper-bundle.min.css";
Swiper.use([Navigation, Pagination]);

export default class RSwiper extends Component {
  componentDidUpdate() {
    new Swiper(".swiper", {
      pagination: {
        el: ".swiper-pagination",
      },
    });
  }
  render() {
    return (
      <div>
        <div className="swiper" style={{height: '200px'}}>
          <div className="swiper-wrapper">
            {this.props.children}
          </div>
        </div>
        <div className="swiper-pagination"></div>
      </div>
    );
  }
}
