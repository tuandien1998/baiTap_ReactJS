import React, { Component } from "react";

export default class Modal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isDuplicate: false,
    };
  }

  handleDeleteProduct = () => {
    this.props.deleteProduct();
  };

  renderTable = () => {
    const { listCart } = this.props;

    return listCart.map((product) => {
      return (this.state.isDuplicate? "":
        <tr key={product.maSP}>
          <td>{product.maSP}</td>
          <td>{product.tenSP}</td>
          <td>
            <img src={product.hinhAnh} width={50} alt="" />
          </td>
          <td>
            <button>-</button>1<button>+</button>
          </td>
          <td>{product.giaBan}</td>
          <td>{product.giaBan}</td>
          <td>
            <button className="btn btn-danger" onClick={() => this.props.deleteProduct(product)}>Delete</button>
          </td>
        </tr>
      );
    });
    /**
     * Duyet mang
     * Return từng dòng <tr> => Trong dòng có cột
     */
  };

  createTable(listCart) {}

  render() {
    return (
      <div
        className="modal fade"
        id="modelId"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="modelTitleId"
        aria-hidden="true"
      >
        <div
          className="modal-dialog"
          style={{ maxWidth: "1000px" }}
          role="document"
        >
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Giỏ hàng</h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <table className="table" id="tableThis">
                <thead>
                  <tr>
                    <th>Mã sản phẩm</th>
                    <th>tên sản phẩm</th>
                    <th>hình ảnh</th>
                    <th>số lượng</th>
                    <th>đơn giá</th>
                    <th>thành tiền</th>
                  </tr>
                </thead>
                <tbody>
                {this.renderTable()}
                </tbody>
              </table>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}