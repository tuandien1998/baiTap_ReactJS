import React, { Component } from "react";

export default class Phim extends Component {
  render() {
    const { product } = this.props;
    return (
      <div className="col-xs-12 col-sm-4">
        {/* item */}
        <div className="container product">
          <div className="card bg-light" style={{ width: 300 }}>
            <img
              className="product__img__top"
              src={product.hinhAnh}
              alt="product_image_cap"
              style={{ maxWidth: "100%", height: 350 }}
            />
            <div className="product__body">
              <h5 className="product__title">{product.tenPhim}</h5>
              <p className="product__text">{product.moTa}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
