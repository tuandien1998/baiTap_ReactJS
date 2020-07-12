import React, { Component } from "react";

export default class ItemProduct extends Component {
  render() {
    return (
      <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3 col-lg-3">
        {/* item */}
        <div className="container product">
          <div className="card bg-light" style={{width:300}}>
            <img
              className="product__img__top"
              src={`./img/${this.props.image}`}
              alt="product_image_cap"
              style={{ maxWidth: "100%", height: 250 }}
            />
            <div className="product__body">
              <h5 className="product__title">{this.props.name}</h5>
              <p className="product__text" style={{ height: 60 }}>{this.props.description}</p>
              <button className="btn btn-info m-1">Detail</button>
              <button className="btn btn-danger m-1">Cart</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
