import React, { Component } from "react";
import Phim from "./phim";

export default class BaiTapList extends Component {
  renderHTML = () => {
    const { listMovie } = this.props;
    return (
      listMovie.map((product) => {
      return <Phim key={product.maPhim} product={product} />;
    })
    )
  };

  render() {
    return (
      <div className="container">
        <div className="row">{this.renderHTML()};</div>
      </div>
    );
  }
}
