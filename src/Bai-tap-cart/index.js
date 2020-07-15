import React, { Component } from "react";
import DanhSachSanPham from "./danh-sach-san-pham";
import Modal from "./modal";
import data from "./data.json";

export default class BaiTapCart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      listProduct: data,
      detailProduct: data[0],
      listCart: [],
    };
  }

  handleDetailProduct = (product) => {
    this.setState({
      detailProduct: product,
    });
  };

  handleAddCart = (product) => {
    let listCart = [...this.state.listCart, product];
    this.setState({
      listCart,
    });
    console.log(listCart);
  };

  handleDeleteBtn = (product) => {
    let listCart = this.state.listCart;
    var index = listCart.indexOf(product);
    
    if (index > -1) {
      listCart.splice(index, 1);
    }
    
    this.setState({
      listCart
    });

    console.log(product);
    console.log(this.state.listCart);
  };

  printItemInListCart(listCart) {
    return listCart.length;
  }

  render() {
    const { listProduct, detailProduct, listCart } = this.state;
    return (
      <div>
        <h1 className="title">Bài Tập 3: Bài tập giỏ hàng</h1>
        <div className="container">
          <button
            className="btn btn-danger"
            data-toggle="modal"
            data-target="#modelId"
          >
            Giỏ hàng ({this.printItemInListCart(listCart)})
          </button>
        </div>
        <DanhSachSanPham
          listProduct={listProduct}
          detailProduct={this.handleDetailProduct}
          addCart={this.handleAddCart}
        />
        <Modal listCart={listCart} deleteProduct={this.handleDeleteBtn}/>
        <div className="row">
          <div className="col-sm-5">
            <img className="img-fluid" src={detailProduct.hinhAnh} alt="" />
          </div>
          <div className="col-sm-7">
            <h3>Thông số kỹ thuật</h3>
            <table className="table">
              <tbody>
                <tr>
                  <td>Màn hình</td>
                  <td>{detailProduct.manHinh}</td>
                </tr>
                <tr>
                  <td>Hệ điều hành</td>
                  <td>{detailProduct.heDieuHanh}</td>
                </tr>
                <tr>
                  <td>Camera trước</td>
                  <td>{detailProduct.cameraTruoc}</td>
                </tr>
                <tr>
                  <td>Camera sau</td>
                  <td>{detailProduct.cameraSau}</td>
                </tr>
                <tr>
                  <td>RAM</td>
                  <td>{detailProduct.ram}</td>
                </tr>
                <tr>
                  <td>ROM</td>
                  <td>{detailProduct.rom}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
