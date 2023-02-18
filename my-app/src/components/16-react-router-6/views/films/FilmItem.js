import React, { Component } from "react";
import WithRouter  from "../../components/WithRouter";
class FilmItem extends Component {
  render() {
    console.log(this.props)
    return <li onClick={() => this.handleClick(this.props.filmId)}>1111</li>;
  }
  handleClick(id) {
    this.props.history.push(`/detail/${id}`)
  }
}

export default WithRouter(FilmItem)